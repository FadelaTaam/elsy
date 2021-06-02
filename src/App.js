import React from "react";
import './App.css';
import Box from "./components/Box.jsx";
import "./styles/global.css";

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      water : 0,
      heart : 120,
      temperature : -10,
      steps  : 3000
    };
  }

  render() {
    return (
      <div class="container-fluid">

        <div class="row">
          <Box
            //boîte Water//
            const icon="local_drink"
            const color= "#3A85FF"
            const value={1.5}
            const unit="L" />
          <Box
            //boîte Steps// 
            const icon="directions_walk"
            color="black"
            value={3000}
            unit="steps" />
          <Box
            //boîte Heart//
            const icon="favorite"
            const color="red"
            value={120}
            unit="bpm" />
          <Box
            //boîte Temperature//
            icon="wb_sunny"
            color="yellow"
            value={-10}
            unit="°C" />
        </div>

      </div>
    );
  }
}