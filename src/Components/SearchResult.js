import React from "react";
import CityList from "./CityList";

function SearchResult(props) {

    return(
        <>
            <CityList cities={props.setCity}/>
        </>
    )
}

export default SearchResult; 