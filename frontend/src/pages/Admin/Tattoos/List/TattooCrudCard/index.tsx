import { Link } from "react-router-dom";
import { Tattoo } from "../../../../../types/Tattoo";
import { formatPrice } from "../../../../../utils/formaters";
import "./styles.css";

type Props = {
  tattoo: Tattoo;
};

const TattoCrudCard = ({ tattoo }: Props) => {
  return (
    <div className="card-crud-container">
      <div className="img-tattoo-card">
        <img src={tattoo.artUrl} alt="" />

        <div className="bottom-card-crud">
          <div>
            <p>
              {/* {tattoo.artist.name
                ? tattoo.artist.name
                : "Nome do artista indisponível"} */}
            </p>
            <p>{tattoo.name}</p>
            <p>
              <span>Preço: </span>R$ {formatPrice(tattoo.price)}
            </p>
          </div>
        </div>
      </div>

      <div className="btn-tattoo-card-container">
        <button className="btn-delete-tattoo-card">Excluir</button>

        <Link to={`/admin/tattoo/${tattoo.id}`}>
          <button className="btn-update-tattoo-card">Editar</button>
        </Link>
      </div>
    </div>
  );
};

export default TattoCrudCard;
