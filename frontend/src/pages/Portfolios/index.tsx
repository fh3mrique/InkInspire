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

  return (
    <div className="container my-5">
      {loading ? ( // Exibe o loader enquanto estiver carregando
        <div className="loader"></div>
      ) : (
        <Box sx={{ width: "100%" }}>
          {page && ( // Verifica se page não é undefined
            <ImageList variant="masonry" cols={4} gap={18}>
              {page.content.map((tattoo) => (
                <ImageListItem key={tattoo.id}>
                  <Link to={`/portfolios/${tattoo.id}`}>
                    <CardTattoo tattoo={tattoo} />
                  </Link>
                  <ImageListItemBar position="below" title={tattoo.name} />
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
