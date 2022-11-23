import React from "react";

function City(props) {

    return(
        <>
        <p>{props.city.ville}</p>
        <p>{props.city.temp}</p>
        <p>{props.city.img}</p>
        </>
    )
}

export default City;