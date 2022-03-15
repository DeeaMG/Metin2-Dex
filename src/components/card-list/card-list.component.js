import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ weapons }) => (
  <div className="card-list">
    {weapons.map((weapons) => {
      return <Card weapons={weapons} />;
    })}
  </div>
);

export default CardList;
