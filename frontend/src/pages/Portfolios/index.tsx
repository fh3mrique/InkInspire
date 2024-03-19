import TatooCard from "../../components/TattooCard"

const Portfolios = () => {
  return (
    <div className="container my-5">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <TatooCard/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 ">
            <TatooCard/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <TatooCard/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <TatooCard/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <TatooCard/>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <TatooCard/>
          </div>
          
        </div>
    </div>
  )
}

export default Portfolios