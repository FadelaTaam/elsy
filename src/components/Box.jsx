import React from "react";

export default class Box extends React.Component {

    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{fontSize: +'100', color: 'black'}}>
                directions_walk
                </span>

            </div>

        );
    }
}