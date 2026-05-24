import HobbyItem from "./HobbyItem";
import Card from "../UI/Card";
import "./HobbyList.css";

const HobbyList = (props) => {
  return (
    <Card className="hobby-list">
      {props.items.map((hobby) => (
        <HobbyItem
          key={hobby.id}
          name={hobby.name}
          description={hobby.description}
          onDelete={() => props.onDeleteHobby(hobby.id)}
        />
      ))}
    </Card>
  );
};

export default HobbyList;
