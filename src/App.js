import React from "react";
import './App.css';
import Box from "./components/Box.jsx";
import "./styles/global.css";

  const tempMin= -20
 // eslint-disable-next-line
  const tempMax=40
  const heartMin= 80
  // eslint-disable-next-line
  const heartMax= 180
  // eslint-disable-next-line
  const stepsMin=0
  // eslint-disable-next-line
  const stepsMax= 50000

 export default class App extends React.Component {
  
  render() {
    return (
      <div class="container-fluid">
      
        <div class="row">
          <Box/>
          <p> Heart :{heartMin}</p>
          <p> Temperature :{tempMin}</p> 
          <p> Steps :{stepsMin}</p>
          
        </div>
        
      </div>
    );
  }
} 