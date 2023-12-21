import { useState } from "react";
import Navigation from "./components/Navigation";
import NotesHolder from "./components/NotesHolder/NotesHolder";
import PopUp from "./components/PopUp/PopUp";


function App() {
  const [isPopUpShow, setIsPopUpShow] = useState(false);
  const [tasksArray, setTasksArray] = useState([]);

  return (
    <div className="AppCom relative flex">
      { 
        isPopUpShow ? 
          <PopUp 
            setIsPopUpShow={setIsPopUpShow} 
            tasksArray={tasksArray} 
            setTasksArray={setTasksArray} 
          /> : 
        null
      }
      <Navigation setIsPopUpShow={setIsPopUpShow} />
      <NotesHolder tasksArray={tasksArray} setTasksArray={setTasksArray} />
    </div>
  );
}

export default App;
