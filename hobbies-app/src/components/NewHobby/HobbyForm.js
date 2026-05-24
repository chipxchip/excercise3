import { useState } from "react";
import "./HobbyForm.css";

const HobbyForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [isValid, setIsValid] = useState(true);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "" || enteredDescription.trim() === "") {
      setIsValid(false);
      return;
    }

    setIsValid(true);

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
        <div className={`hobby-form__control ${!isValid ? "invalid" : ""}`}>
          <label>Hobby Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className={`hobby-form__control ${!isValid ? "invalid" : ""}`}>
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
