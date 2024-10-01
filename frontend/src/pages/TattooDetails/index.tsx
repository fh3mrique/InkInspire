import "./styles.css";
import { formatPrice } from "../../utils/formaters";
import { Tattoo } from "../../types/Tattoo";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Link, useParams } from "react-router-dom";
import Arrowback from "../../assets/img/arrow-back.svg";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const TattooDetails = () => {
  const [tattoo, setTattoo] = useState<Tattoo>();
  const [recommendedTattoos, setRecommendedTattoos] = useState<Tattoo[]>([]);
  const [startIndex, setStartIndex] = useState(0); // Estado para o índice inicial visível
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

  type UrlParams = {
    tattooId: string;
  };
  const { tattooId } = useParams<UrlParams>();

  useEffect(() => {
    axios.get(`${BASE_URL}/tattoo/${tattooId}`).then((response) => {
      setTattoo(response.data);
      const artistId = response.data.artist.id;
      axios.get(`${BASE_URL}/tattoo/artist/${artistId}`).then((res) => {
        setRecommendedTattoos(res.data.slice(0, 20));
      });
    });
  }, [tattooId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Aqui você pode enviar os dados via uma requisição à API
    // Exemplo: axios.post(`${BASE_URL}/interesse`, data);
    reset(); // Limpa o formulário após o envio
    setIsModalOpen(false); // Fecha o modal
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? recommendedTattoos.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 3 >= recommendedTattoos.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="product-details-container my-3">
      <div className="goback-container">
        <Link to="/portfolios">
          <img src={Arrowback} alt="Back" />
        </Link>
      </div>

      <div className="tattoo-card-container">
        <div className="row card-details-container">
          <div className="col-xl-6 card-tattoo-details-image">
            <img src={tattoo?.artUrl} alt={tattoo?.name} />
            <h3>{tattoo?.name}</h3>
          </div>
          <div className="col-xl-4 card-tattoo-details-resume">
            <div className="artist-resume-detais">
              <div className="img-artist-resume">
                <img src={tattoo?.artist.photo} alt={tattoo?.artist.name} />
                <span>{tattoo?.artist.name}</span>
              </div>
              <p>
                Perfil: <span>{tattoo?.artist.perfil}</span>
              </p>
              <p>
                Contato: <span>{tattoo?.artist.contact}</span>
              </p>
              <p>
                Email: <span>{tattoo?.artist.email}</span>
              </p>
            </div>

            <div className="tatto-description-details">
              <p>
                Estilo: <span>{tattoo?.style.name}</span>
              </p>
              <p>
                Descrição: <span>{tattoo?.description}</span>
              </p>

              {/* Botão para abrir o modal */}
              <button
                className="btn-interesse"
                onClick={() => setIsModalOpen(true)}
              >
                Interesse
              </button>

              <p className="price-tattoo-details">
                Preço:{" "}
                {tattoo?.price === undefined
                  ? "Vazio"
                  : formatPrice(tattoo.price)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carrossel Manual de Recomendação de Tatuagens */}
      <div className="recommendations-section">
        <h3>Outras artes de {tattoo?.artist.name} que talvez você goste</h3>
        <div className="carousel-container">
          <button onClick={handlePrev} className="carousel-button">
            {"<"}
          </button>
          <div className="carousel-items">
            {recommendedTattoos
              .slice(startIndex, startIndex + 3)
              .map((recommendedTattoo) => (
                <div
                  key={recommendedTattoo.id}
                  className="recommended-tattoo-card"
                >
                  <img
                    src={recommendedTattoo.artUrl}
                    alt={recommendedTattoo.name}
                    className="tattoo-image"
                  />
                  <p className="tattoo-name">{recommendedTattoo.name}</p>
                </div>
              ))}
          </div>
          <button onClick={handleNext} className="carousel-button">
            {">"}
          </button>
        </div>
      </div>

      {/* Modal para o formulário de interesse */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Demonstrar Interesse</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact-buyer">
            <div className="input-tatto-form">
              <label>Nome:</label>
              <input 
                {...register("name", { required: "Nome é obrigatório" })}
                placeholder="Seu nome"
              />
            </div>

            <div className="input-tatto-form">
              <label>Contato:</label>
              <input className="base-input"
                {...register("contact", { required: "Contato é obrigatório" })}
                placeholder="Seu contato"
              />
            </div>
          </div>

          <div className="input-tatto-form">
            <label>Mensagem:</label>
            <textarea className="text-area-input-tattoo"
              {...register("message", { required: "Mensagem é obrigatória" })}
              placeholder="Escreva sua mensagem"
            />
          </div>

          <div className="modal-buttons">
            <button className="btn" type="submit">Enviar Interesse</button>
            <button className="btn" type="button" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default TattooDetails;
