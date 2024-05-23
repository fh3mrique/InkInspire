import { useEffect, useState } from "react";
import { BASE_URL, requestBackend } from "../../utils/request";
import { AxiosRequestConfig } from "axios";
import { SpringPage } from "../../types/vendor/spring";
import { Tattoo } from "../../types/Tattoo";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./styles.css";
import CardTattoo from "../../components/CardTattoo";

const Portfolios = () => {
  const [page, setPage] = useState<SpringPage<Tattoo>>();
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState(4); // Estado para controlar o número de colunas


  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `${BASE_URL}/tattoo`,
      params: {
        page: 0,
        size: 40,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {

    const updateColumns = () => {
      if (window.innerWidth <= 765){
        setColumns(1)
      }
      else if (window.innerWidth <= 986) {
        setColumns(2);
      } else if (window.innerWidth <= 1399) {
        setColumns(3);
      } 
      else {
        setColumns(4);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);

    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, []);



  return (
    <div className="container my-5">
      {loading ? ( // Exibe o loader enquanto estiver carregando
        <div className="loader"></div>
      ) : (
        <Box sx={{ width: "100%" }}>
          {page && ( // Verifica se page não é undefined
            <ImageList variant="masonry" cols={columns} gap={18}>
              {page.content.map((tattoo) => (
                <ImageListItem key={tattoo.id}>
                  <Link to={`/portfolios/${tattoo.id}`}>
                    <CardTattoo tattoo={tattoo} />
                  </Link>
                  <ImageListItemBar className="name-tatto-listing-page" position="below" title={tattoo.name} />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Box>
      )}
    </div>
  );
};

export default Portfolios;
