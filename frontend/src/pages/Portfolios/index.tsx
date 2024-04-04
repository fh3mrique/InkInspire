import { useEffect, useState } from "react";
import TatooCard from "../../components/TattooCard";
import { Tattoo } from "../../types/Tattoo";
import { BASE_URL, requestBackend } from "../../utils/request";
import { AxiosRequestConfig } from "axios";
import { Link } from "react-router-dom";
import { SpringPage } from "../../types/vendor/spring";

const Portfolios = () => {
  const [page, setPage] = useState<SpringPage<Tattoo>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `${BASE_URL}/tattoo`,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
      console.log(page);
    });
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        {page?.content.map((tattoo) => (
          <div className="col-sm-6 col-lg-4 col-xl-3" key={tattoo.id}>
            <Link to="/portfolios/1">
              <TatooCard tattoo={tattoo} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolios;
