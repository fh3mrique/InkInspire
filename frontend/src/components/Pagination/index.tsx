import "./styles.css";
import ArrowRight from "../../assets/img/arrow-back.svg";
import ReactPaginate from "react-paginate";
const Pagination = () => {
  return (
    <>
      <ReactPaginate 
      pageCount={10} 
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
       />

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
    </>
  );
};

export default Pagination;
