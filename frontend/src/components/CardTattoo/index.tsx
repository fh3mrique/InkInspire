import { Tattoo } from "../../types/Tattoo";
import { formatPrice } from "../../utils/formaters";
import './styles.css'

type Props = {
    tattoo: Tattoo
}

const CardTattoo = ({tattoo}:  Props) => {
  return <div>
    <img src={tattoo.artUrl} alt="" loading="lazy" className="img-tatoo"/>
    <div className="teste">
        <p className="price-tattoo-card-listing">
                R$ {formatPrice( tattoo.price)} 
        </p>
    </div>
  </div>;
};

export default CardTattoo;
