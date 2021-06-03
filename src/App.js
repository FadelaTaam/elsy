import React from "react";
import './styles/global.css';
import './App.css';
import Box from './components/Box.jsx';

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      water:1.5, 
      heart: 120, 
      temperature: -10, 
      steps:3000
    };
  }
  onTempChange = (e) => {
    this.setState({ temperature: e.target.value });
  }; 
  onHeartChange = (e) => {
  this.setState({ heart: e.target.value });
};
  onStepsChange = (e) => {
    this.setState({ steps: e.target.value });
  };
  

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box icon="local_drink" 
          color="#3A85FF" 
          value={1.5} 
          unit="L" 
          />
          <Box
            icon="directions_walk"
            color="black"
            value={this.state.steps}
            unit="steps"
            min={stepsMin}
            max={stepsMax}
            onChange={this.onStepsChange}
          />
          <Box icon="favorite" 
          color="red" 
          value={this.state.heart} 
          unit="bpm"
          min={heartMin}
          max={heartMax}
          onChange={this.onHeartChange}
          />
          <Box icon="wb_sunny" 
          color="yellow" 
          value={this.state.temperature} 
          unit="°C" 
          min={tempMin}
          max={tempMax}
          onChange={this.onTempChange}
          />
        </div>
      </div>
    );
  }
}
export default App;

/*
Quelque soit les éléments externes, vous devez boire au minimum 1,5 litre d’eau par jour
Si la température est supérieure à 20 degrés Celsius, chaque degré au dessus aura un facteur de 0,02 litres en plus
Si les battements de coeurs sont au dessus de 120, chaque battement au dessus aura un facteur de 0,0008 litres en plus
Si le nombre de pas est supérieur à 10 000, chaque pas au dessus aura un facteur de 0,00002 litres en plus
*/
 