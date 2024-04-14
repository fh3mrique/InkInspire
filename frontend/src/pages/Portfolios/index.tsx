import { useEffect, useState } from "react";
import { BASE_URL, requestBackend } from "../../utils/request";
import { AxiosRequestConfig } from "axios";
import { SpringPage } from "../../types/vendor/spring";
import { Tattoo } from "../../types/Tattoo";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './styles.css'
import CardTattoo from "../../components/CardTattoo";

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
    });
  }, []);


  const getCols = (): number => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      return 1; // Para telas menores que 600px, exibe uma coluna
    } else if (screenWidth < 960) {
      return 2; // Para telas entre 600px e 960px, exibe duas colunas
    } else if (screenWidth < 1280) {
      return 3; // Para telas entre 960px e 1280px, exibe três colunas
    } else {
      return 4; // Para telas maiores que 1280px, exibe quatro colunas
    }
  };

  return (
    <div className="container my-5">
      <Box sx={{ width: '100%' }}>
        {page && ( // Verifica se page não é undefined
          <ImageList variant="masonry" cols={getCols()} gap={18}>
            {page.content.map((tattoo) => (
              <ImageListItem key={tattoo.id}>
                <Link to={`/portfolios/${tattoo.id}`}>
                  {/* <img
                    src={tattoo.artUrl}
                    alt={tattoo.name}
                    loading="lazy"
                    className="img-tatoo"
                  /> */}
                  <CardTattoo tattoo = {tattoo}/>
                </Link>
                <ImageListItemBar
                  position="below"
                  title={tattoo.name}
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Box>
    </div>
  );
};

export default Portfolios;
