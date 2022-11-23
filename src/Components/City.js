import React from "react";
import './City.css';

function City(props) {

    return (
       <div className="result">
            <h2>{props.city.ville}</h2>
            <div className="info">
                <h2>{props.city.temp}</h2>
                <div className="divider"></div>
                <h2>{props.city.img}</h2>
            </div>
       </div>
            
    )
}

export default City;