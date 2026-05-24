import { useState } from "react";
import "./HobbyForm.css";

const HobbyForm = (props) => {
  const [enteredName, setEnteredName] = useState(" ");
  const [enteredDescription, setEnteredDescription] = useState(" ");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const hobbyData = {
      name: enteredName,
      description: enteredDescription,
    };

    console.log(hobbyData);
    props.onSaveHobby(hobbyData);

    setEnteredName(" ");
    setEnteredDescription(" ");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="hobby-form__controls">
        <div className="hobby-form__control">
          <label>Hobby Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className="hobby-form__control">
          <label>Description</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
      </div>
      <div className="hobby-form__actions">
        <button type="submit">Add Hobby</button>
      </div>
    </form>
  );
};

export default HobbyForm;
