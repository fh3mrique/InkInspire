import "./styles.css";
import { formatPrice } from "../../utils/formaters";
import { Tattoo } from "../../types/Tattoo";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Link, useParams } from "react-router-dom";
import Arrowback from "../../assets/img/arrow-back.svg";

const TattooDetails = () => {
  const [tattoo, setTattoo] = useState<Tattoo>();

  type UrlParams = {
    tattooId: string;
  };
  const { tattooId } = useParams<UrlParams>();

  useEffect(() => {
    axios.get(BASE_URL + "/tattoo" + `/${tattooId}`).then((response) => {
      setTattoo(response.data);
    });
  }, []);

  return (
    <div className="product-details-container my-3">
      <div className="goback-container">
        <Link to="/portfolios">
          <img src={Arrowback} />
        </Link>
      </div>

      <div className="tattoo-card-container">
        <div className="row card-details-container">
          <div className="col-xl-6 card-tattoo-details-image">
            <img src={tattoo?.artUrl} alt="" />
            <h3>{tattoo?.name}</h3>
          </div>
          <div className="col-xl-4 card-tattoo-details-resume">
            <div className="artist-resume-detais">
              <div className="img-artist-resume">
                <img src={tattoo?.artist.photo} />
                <span>{tattoo?.artist.name}</span>
              </div>
              <p>
                perfil: <span>{tattoo?.artist.perfil}</span>
              </p>
              <p>
                contact: <span>{tattoo?.artist.contact}</span>
              </p>
              <p>
                email: <span>{tattoo?.artist.email}</span>
              </p>
            </div>

            <div className="tatto-description-details">
              <p>
                STYLE: <span>{tattoo?.style.name}</span>
              </p>
              <text>
                DESCRIÇÃO: <span>{tattoo?.description}</span>
              </text>

              <p className="price-tattoo-details">
                PREÇO:{" "}
                {tattoo?.price == undefined
                  ? "VAZIO"
                  : formatPrice(tattoo.price)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TattooDetails;
