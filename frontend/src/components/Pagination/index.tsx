import "./styles.css";
import ArrowRight from "../../assets/img/arrow-back.svg";
import ReactPaginate from "react-paginate";
const Pagination = () => {
  return (
    <div className="paginate-config">
      <>
        <ReactPaginate
          pageCount={10}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          containerClassName="pagination-container"
          pageLinkClassName="pagination-number"
          activeLinkClassName="active"
          nextClassName="arrow-right"
          previousClassName="arrow-previous"
          previousLabel={<img className="arrow-left" src={ArrowRight} alt="" />}
          nextLabel={<img className="arrow-left" src={ArrowRight} alt="" />}
        />
      </>
    </div>
  );
};

export default Pagination;
