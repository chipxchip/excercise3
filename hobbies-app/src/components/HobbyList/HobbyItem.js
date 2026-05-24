import Card from "../UI/Card";
import "./HobbyItem.css";

const HobbyItem = (props) => {
  return (
    <Card className="hobby-item">
      <div className="hobby-item__content">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <button onClick={props.onDelete}>Delete</button>
    </Card>
  );
};

export default HobbyItem;
