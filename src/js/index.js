//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let seconds = 0;
let digits = {};
//render your react application
setInterval(function() {
    digits.digitOne = Math.floor(seconds % 10);
    digits.digitTwo = Math.floor(seconds/10 % 10);
    digits.digitThree = Math.floor(seconds/100 % 10);
    digits.digitFour = Math.floor(seconds/1000 % 10);
    
    console.log(digits);
    ReactDOM.render(<Home digits={digits} />, document.querySelector("#app"))
    seconds += 1
  
}, 1000);