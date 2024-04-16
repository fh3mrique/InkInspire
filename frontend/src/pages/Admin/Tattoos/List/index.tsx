import { Link } from "react-router-dom";
import TattoCrudCard from "../TattooCrudCard";
import "./styles.css";

const List = () => {
  const tatto = {
    id: 1,
    name: "Tatuagem Shikamaru",
    description: "Tradicional americana arte",
    style: {
      id: 1,
      name: "Tradicional Americana",
    },
    price: 300.0,
    artUrl:
      "https://i.pinimg.com/564x/48/88/63/4888637b3a66673bd1c62cdae99c0674.jpg",
    artist: {
      id: 2,
      name: "ARTISTA 2",
      photo:
        "https://s2.glbimg.com/SmsWi_YyltW2P41o_rqhxCpmOybp8-DwBidCisRnwI2QoQwS7DYrQjPIFKkFlySW/e.glbimg.com/og/ed/f/original/2013/09/09/ami_james_a.jpg",
      perfil: "Esse é meu perfil",
      contact: "81 932324345",
      email: "artista2@gmail.com",
    },
  };
  return (
    <div>
      <div className="tatto-crud-bar-container">
        <Link to="create">
          <button className="btn btn-primary btn-crud-add">Adicionar</button>
        </Link>
        <div className="base-card tatoo-filter-container">Search bar</div>
      </div>

      <div className="row">
        <div className="col-sm-6 col-md-12">
          <TattoCrudCard />
        </div>

        <div className="col-sm-6 col-md-12">
          <TattoCrudCard />
        </div>

        <div className="col-sm-6 col-md-12">
          <TattoCrudCard />
        </div>
      </div>
    </div>
  );
};

export default List;
