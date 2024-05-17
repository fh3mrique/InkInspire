import "./styles.css";
import SearchIcon from "../../assets/img/search-icon.svg";

const TattooFilter = () => {
  return (
    <div className="base-card tatoo-filter-container">
      <form action="" className="tattoo-filter-form">
        <div className="tattoo-filter-name-container">
          <input
            type="text"
            className="form-control"
            placeholder="Nome da tatuagem"
          />
          <img src={SearchIcon} alt="" />
        </div>

        <div className="tattoo-filter-bottom-container">
          <div className="tattoo-filter-styles-container">
            <select name="" id="">
              <option value="">Livroes</option>
            </select>
          </div>
          <button className="btn btn-outline-secondary">Limpar</button>
        </div>
      </form>
    </div>
  );
};

export default TattooFilter;
