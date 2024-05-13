import { Link } from "react-router-dom";
import { Tattoo } from "../../../../../types/Tattoo";
import { formatPrice } from "../../../../../utils/formaters";
import "./styles.css";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../../../../../utils/request";

type Props = {
  tattoo: Tattoo;
  onDelete: Function;
};

const TattoCrudCard = ({ tattoo, onDelete }: Props) => {
  const handleDelete = (tattooId: number) => {
    if (!window.confirm("Tem certeza que deseja deletar?")) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: "DELETE",
      url: `/tattoo/${tattooId}`,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      onDelete();
    });
  };

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
        <button
          onClick={() => handleDelete(tattoo.id)}
          className="btn-delete-tattoo-card"
        >
          Excluir
        </button>

        <Link to={`/admin/tattoo/${tattoo.id}`}>
          <button className="btn-update-tattoo-card">Editar</button>
        </Link>
      </div>
    </div>
  );
};

export default TattoCrudCard;
