import { useState } from "react";
import HobbyForm from "./HobbyForm";
import "./NewHobby.css";

const NewHobby = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveHobbyHandler = (enteredHobby) => {
    const hobbyData = {
      ...enteredHobby,
      id: Math.random().toString(),
    };
    console.log("In NewHobby.js");
    console.log(hobbyData);
    props.onAddHobby(hobbyData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-hobby">
      {isEditing ? (
        <HobbyForm
          onSaveHobby={saveHobbyHandler}
          onCancel={stopEditingHandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Add Hobby</button>
      )}
    </div>
  );
};

export default NewHobby;
