import { Link } from "react-router-dom";
import TattoCrudCard from "./TattooCrudCard";
import "./styles.css";
import { useEffect, useState } from "react";
import { SpringPage } from "../../../../types/vendor/spring";
import { Tattoo } from "../../../../types/Tattoo";
import { BASE_URL, requestBackend } from "../../../../utils/request";
import { AxiosRequestConfig } from "axios";
import Pagination from "../../../../components/Pagination";

const List = () => {
  const [page, setPage] = useState<SpringPage<Tattoo>>();

  useEffect(() => {
    getTattoos(0);
  }, []);

  const getTattoos = (pageNumber: number) => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `${BASE_URL}/tattoo`,
      params: {
        page: pageNumber,
        size: 3,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
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
        {page?.content.map((tattoo) => (
          <div key={tattoo.id} className="col-sm-6 col-md-12">
            <TattoCrudCard
              tattoo={tattoo}
              onDelete={() => getTattoos(page.number)}
            />
          </div>
        ))}
      </div>

      <Pagination
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={getTattoos}
      />
    </div>
  );
};

export default List;
