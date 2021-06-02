import React from "react";
import '../App.css';

class Box extends React.Component {
    render() {
        let slider
        if (this.props.icon !== "local_drink") {
            slider = <input type="range" id="volume" name="jauge" min="0" max="11"></input>
        } else { slider = null }
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons"
                style={{ fontSize: 100, color: this.props.color }}>
                    {this.props.icon}</span>

                <p>{this.props.value} {this.props.unit}</p>
                
                <div>
                    {slider}
                </div>
            </div>
        )
    }
}
export default Box;