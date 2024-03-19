import "./styles.css";
import { Tattoo } from "../../types/Tattoo";

type Props = {
  tattoo: Tattoo;
};
const TatooCard = ({ tattoo }: Props) => {
  return (
    <div className="tattoo-card">
      <div className="tattoo-card-top-container">
        <img className="img-tatto-card" src={tattoo.artUrl} />
        <h4>{tattoo.name}</h4>
        <div className="tattoo-card-resume-artist">
          <img src={tattoo.artist.photo} />
          <p>{tattoo.artist.name}</p>
        </div>
      </div>

      <div className="tattoo-card-bottom-container">
        <p>Valor</p>
        <div className="tattoo-card-price-target">
          <p>
            R$: <span>{tattoo.price}</span>
          </p>
          <div>Exclusivo</div>
        </div>
      </div>
    </div>
  );
};

export default TatooCard;
