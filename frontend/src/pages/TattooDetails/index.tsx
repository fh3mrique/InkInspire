import ArrowIcon from "../../assets/img/arrow.svg";
import "./styles.css";
import tattoimage from "../../assets/img/tatuagem-tatuador.png";
import artist from "../../assets/img/tatuador.jpeg";
import { formatPrice } from "../../utils/formaters";

const TattooDetails = () => {
  return (
    <div className="product-details-container my-5">
      <div className="goback-container">
        <img src={ArrowIcon} alt="" />
        <h2>VOLTAR</h2>
      </div>

      <div className="tattoo-card-container">
        <div className="row card-details-container">
          <div className="col-xl-6 card-tattoo-details-image">
            <img src={tattoimage} alt="" />
            <h3>nome tatuagem</h3>
          </div>
          <div className="col-xl-4 card-tattoo-details-resume">
            <div className="artist-resume-detais">
              <div className="img-artist-resume">
                <img src={artist} />
                <span>nome do artista</span>
              </div>
              <p>
                perfil: <span>nome do artista</span>
              </p>
              <p>
                contact: <span>81 932324345</span>
              </p>
              <p>
                email: <span>artista@gmail.com</span>
              </p>
            </div>

            <div className="tatto-description-details">
              <p>
                STYLE: <span>estilo</span>
              </p>
              <text>Tradicional americana arte</text>

              <p className="price-tattoo-details">PREÇO: {formatPrice(200)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TattooDetails;
