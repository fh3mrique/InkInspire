import "./styles.css";
import ArrowRight from "../../assets/img/arrow-back.svg";
const Pagination = () => {
  return (
    <div className="pagination-container">
      <div className="previouspage arrow">
        <img className="arrow-left" src={ArrowRight} alt="" />
        <span className="arrow-text">Previous</span>
      </div>

      <div className="pagination-number">1</div>
      <div className="pagination-number">2</div>
      <div className="pagination-number pagination-active">3</div>
      <div className="pagination-number">4</div>
      <div className="pagination-number">540</div>

      <div className="pagination-number arrow">
        <img className="arrow-left" src={ArrowRight} alt="" />
      </div>
    </div>
  );
};

export default Pagination;
