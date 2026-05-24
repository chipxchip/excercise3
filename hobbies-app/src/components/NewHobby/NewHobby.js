import HobbyForm from "./HobbyForm";
import "./NewHobby.css";

const NewHobby = (props) => {
  const saveHobbyHandler = (enteredHobby) => {
    const hobbyData = {
      ...enteredHobby,
      id: Math.random().toString(),
    };
    console.log("In NewHobby.js");
    console.log(hobbyData);
    props.onAddHobby(hobbyData);
  };

  return (
    <div className="new-hobby">
      <HobbyForm onSaveHobby={saveHobbyHandler} />
    </div>
  );
};

export default NewHobby;
