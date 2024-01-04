import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import NotesHolder from "./components/NotesHolder/NotesHolder";
import PopUp from "./components/PopUp/PopUp";
import DeletePopup from "./components/PopUp/DeletePopup";
import UpdatePopup from "./components/PopUp/UpdatePopup";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Singin from "./components/Singin";
import Singup from "./components/Singup";



function App() {
  const [isPopUpShow, setIsPopUpShow] = useState(false);
  const [tasksArray, setTasksArray] = useState([]);
  const [selectedNote,setSelect]=useState();

  useEffect(()=>{
    axios.get("https://udkq7e4e74.execute-api.us-east-1.amazonaws.com/v1/Note").then((response) => {
      setTasksArray(response.data.Notes.Items);
    });
  },[])

  const Dash=()=>{
    return (<div className="AppCom relative flex">
    { 
      isPopUpShow ? 
        <PopUp 
          setIsPopUpShow={setIsPopUpShow} 
          tasksArray={tasksArray} setTasksArray={setTasksArray} 
        /> : 
      null
    }
    <Navigation setIsPopUpShow={setIsPopUpShow} />
    <NotesHolder tasksArray={tasksArray} setTasksArray={setTasksArray} setSelect={setSelect}/>

    {selectedNote?.action==="Delete"?<DeletePopup setSelect={setSelect} selectedNote={selectedNote} setTasksArray={setTasksArray} />:null}
    {selectedNote?.action==="Edit"?<UpdatePopup setSelect={setSelect} selectedNote={selectedNote} tasksArray={tasksArray} setTasksArray={setTasksArray}/>:null}
  </div>)
  }

  return (
    <>
    <Router>
      <Routes>
        <Route path='/Dashboard' element={<Dash />} />
        <Route path='/Signup' element={<Singup/>} />
        <Route path='/' element={<Singin />} />
      </Routes>
    
    </Router>
    </>
    
  );
}

export default App;
