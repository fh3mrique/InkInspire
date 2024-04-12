import { Link } from "react-router-dom";
import "./styles.css";
import { hasAnyRole } from "../../utils/request";


const Home = () => {
  return (
    <div className="home-container">
      <h1>{hasAnyRole(['ROLE_ADMIN']) ? "sim" : "nao"}</h1>

      <div className="home-content">
        <div className="home-text-content">
          <h1>
            Explorando o Universo da Arte na Pele: Encontre Sua Inspiração Aqui!
          </h1>
          <p>
            Descubra Talentosos Tatuadores, Explore Estilos Únicos e Faça Sua
            Próxima Tatuagem se Tornar uma Obra de Arte.
          </p>
        </div>

        <Link to="/portfolios">
          <div className="btn-home-container">
            <button className="btn">Veja mais</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
