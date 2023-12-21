import { useState } from "react";
import Navigation from "./components/Navigation";
import PopUp from "./components/PopUp/PopUp";


function App() {
  const [isPopUpShow, setIsPopUpShow] = useState(false);

  return (
    <div className="AppCom relative">
      { isPopUpShow ? <PopUp setIsPopUpShow={setIsPopUpShow} /> : null}
      <Navigation setIsPopUpShow={setIsPopUpShow} />
    </div>
  );
}

export default App;
