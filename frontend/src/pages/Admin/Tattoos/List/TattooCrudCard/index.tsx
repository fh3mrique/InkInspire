import { Tattoo } from "../../../../../types/Tattoo";
import { formatPrice } from "../../../../../utils/formaters";
import "./styles.css";


type Props = {
  tattoo: Tattoo;
}

const TattoCrudCard = ({tattoo}: Props) => {

  return (
    <div className="card-crud-container">
      <div className="img-tattoo-card">
        <img src={tattoo.artUrl} alt="" />

        <div className="bottom-card-crud">
          <div>
            <p>
              <span>Artista: </span> {tattoo.artist.name}
            </p>
            <p>
              <span>Preço: </span>R$ {formatPrice(tattoo.price)}
            </p>
          </div>
        </div>
      </div>

      <div className="btn-tattoo-card-container">
        <button className="btn-update-tattoo-card">Editar</button>
        <button className="btn-delete-tattoo-card">Excluir</button>
      </div>
    </div>
  );
};

export default TattoCrudCard;
