import React,{ useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
function App() {
  const [navColor, setNavColor] = useState("transparent")
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#141414") : (setNavColor("transparent"))
  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  }, [])
  
  return (
    <div className="App">
      <div style={{
        backgroundColor:navColor, 
        transition:"300ms"
        }} 
        className="App__navbar">
        <Navbar />
      </div>
      <Main />
    </div>
  );
}

export default App;
