import React, { Component } from "react";
import "./card.styles.css";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("../../external/images", false, /\.(png|jpe?g|svg)$/)
);

class Card extends Component {
  render() {
    const { id, name, description } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img alt="monster" src={images[`weapon${id}.png`]} />
          </div>
          <div className="flip-card-back">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
