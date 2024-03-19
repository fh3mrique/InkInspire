import Tattoo from "../../assets/img/tatuagem-tatuador.png";
import Artist from "../../assets/img/tatuador.jpeg";
import "./styles.css";
const TatooCard = () => {
  return (
    <div className="tattoo-card">
      <div className="tattoo-card-top-container">
        <img className="img-tatto-card" src={Tattoo} />
        <h4>Tatuagem generica</h4>
        <div className="tattoo-card-resume-artist">
          <img src={Artist} />
          <p>Artista nome</p>
        </div>
      </div>

      <div className="tattoo-card-bottom-container">
        <p>Valor</p>
        <div className="tattoo-card-price-target">
          <p>
            R$: <span>332.50</span>
          </p>
          <div>Exclusivo</div>
        </div>
      </div>
    </div>
  );
};

export default TatooCard;
