import "./card.styles.css";
import { importAll } from "../../external/functions";

const Card = ({ weapons }) => {
  const { id, name, description } = weapons;
  const images = importAll(
    require.context("../../external/images", false, /\.(png|jpe?g|svg)$/)
  );
  return (
    <div className="card-container" key={id}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img alt="weapons" src={images[`weapon${id}.png`]} />
        </div>
        <div className="flip-card-back">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
