import React, {useState} from "react";
import './switch.scss';
import useThemeMode from "../../hooks/useThemeMode";

const Switch = () => {
  const [mode, setMode] = useState(true);
  useThemeMode(mode);

  return (
    <div className="switch">
      <input type="checkbox" id="switch" onChange={() => setMode(!mode)}/>
      <label for="switch">Toggle</label>
    </div>
  );
};

export default Switch;


// Dark Mode in React using Local Storage
// import React from "react";
// import { useState, useEffect } from "react";

// const Home = () => {
//   const [mode, setMode] = useState("light");
//   const storedMode = localStorage.getItem("mode");
//   if (storedMode == null) {
//     localStorage.setItem("mode", "light");
//   }
//   useEffect(() => {
//     setMode(storedMode);
//   }, []);

//   const handleClick = () => {
//     if (storedMode == "light" || storedMode === null) {
//       localStorage.removeItem("mode");
//       localStorage.setItem("mode", "dark");
//       setMode("dark");
//     } else {
//       localStorage.removeItem("mode");
//       localStorage.setItem("mode", "light");
//       setMode("Light");
//     }
//   };
//   return (
//     <div className="home">
//       <h2>{mode}</h2>
//       <button className={`button-${mode}`} onClick={handleClick}>
//         Click Me
//       </button>
//     </div>
//   );
// };