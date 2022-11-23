import React from "react";
import City from "./City";

function CityList(props) {

    return(
    <div>
        {
                props.cities.map((city) => (
                    <City 
                        key={city.id}
                        city={city}
                    />
                ))
            }
    </div>
            
        
    )
}

export default CityList; 