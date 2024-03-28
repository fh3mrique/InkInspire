import { useEffect, useState } from "react";
import TatooCard from "../../components/TattooCard";
import { AxiosParams } from "../../utils/axios";
import { SpringPage } from "../../utils/spring";
import { Tattoo } from "../../types/Tattoo";
import { BASE_URL } from "../../utils/request";
import axios from "axios";
import { Link } from "react-router-dom";

const Portfolios = () => {
  const [page, setPage] = useState<SpringPage<Tattoo>>();

  useEffect(() => {
    const params: AxiosParams = {
      method: "GET",
      url: `${BASE_URL}/tattoo`,
      params: {
        page: 0,
        size: 12,
      },
    };

    axios(params).then((response) => {
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
