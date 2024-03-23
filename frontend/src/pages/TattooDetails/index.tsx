import ArrowIcon from "../../assets/img/arrow.svg";
import "./styles.css";
import tattoimage from "../../assets/img/tatuagem-tatuador.png";
import artist from "../../assets/img/tatuador.jpeg";
import { formatPrice } from "../../utils/formaters";
import { Tattoo } from "../../types/Tattoo";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/request";

const TattooDetails = () => {

  const [tattoo, setTattoo] = useState<Tattoo>();

  useEffect(() =>{
   axios.get(BASE_URL + "/1")
   .then(response => {
    setTattoo(response.data)
   });
  }, [])

  return (
    <div className="product-details-container my-5">
      <div className="goback-container">
        <img src={ArrowIcon} alt="" />
        <h2>VOLTAR</h2>
      </div>

      <div className="tattoo-card-container">
        <div className="row card-details-container">
          <div className="col-xl-6 card-tattoo-details-image">
            <img src={tattoo?.artUrl} alt="" />
            <h3>{tattoo?.name}</h3>
          </div>
          <div className="col-xl-4 card-tattoo-details-resume">
            <div className="artist-resume-detais">
              <div className="img-artist-resume">
                <img src={tattoo?.artist.photo} />
                <span>{tattoo?.artist.name}</span>
              </div>
              <p>
                perfil: <span>{tattoo?.artist.perfil}</span>
              </p>
              <p>
                contact: <span>{tattoo?.artist.contact}</span>
              </p>
              <p>
                email: <span>{tattoo?.artist.email}</span>
              </p>
            </div>

            <div className="tatto-description-details">
              <p>
                STYLE: <span>{tattoo?.style.name}</span>
              </p>
              <text>DESCRIÇÃO: <span>{tattoo?.description}</span></text>

              <p className="price-tattoo-details">PREÇO: {tattoo?.price == undefined ? 'VAZIO' : formatPrice(tattoo.price)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TattooDetails;
