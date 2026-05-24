import { useState } from "react";
import NewHobby from "./components/NewHobby/NewHobby";
import HobbyList from "./components/HobbyList/HobbyList";
import "./App.css";

const App = () => {
  const [hobbies, setHobbies] = useState([]);

  const addHobbyHandler = (hobby) => {
    console.log("In App.js");
    console.log(hobby);
    setHobbies((prevHobbies) => {
      return [hobby, ...prevHobbies];
    });
  };

  const deleteHobbyHandler = (hobbyId) => {
    setHobbies((prevHobbies) => {
      return prevHobbies.filter((hobby) => hobby.id !== hobbyId);
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#3f3f3f",
        miniHeight: "100vh",
        padding: "1rem",
      }}
    >
      <NewHobby onAddHobby={addHobbyHandler} />
      <HobbyList items={hobbies} onDeleteHobby={deleteHobbyHandler} />
    </div>
  );
};
export default App;
