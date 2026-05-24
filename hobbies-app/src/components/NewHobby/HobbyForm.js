import { useState } from "react";
import "./HobbyForm.css";

const HobbyForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim() !== "") {
      setIsNameValid(true);
    }
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
    if (event.target.value.trim() !== "") {
      setIsDescriptionValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "" || enteredDescription.trim() === "") {
      if (enteredName.trim() === "") setIsNameValid(false);
      if (enteredDescription.trim() === "") setIsDescriptionValid(false);

      return;
    }

    const hobbyData = {
      name: enteredName,
      description: enteredDescription,
    };

    console.log(hobbyData);
    props.onSaveHobby(hobbyData);

    setEnteredName("");
    setEnteredDescription("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="hobby-form__controls">
        <div className={`hobby-form__control ${!isNameValid ? "invalid" : ""}`}>
          <label>Hobby Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div
          className={`hobby-form__control ${!isDescriptionValid ? "invalid" : ""}`}
        >
          <label>Description</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
      </div>
      <div className="hobby-form__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Hobby</button>
      </div>
    </form>
  );
};

export default HobbyForm;
