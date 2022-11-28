import './App.css';
import sun from './sun.png';
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=844c13f6bda60d25e077e1ba71204f9e`

  const searchLocation = (event) => {
      if(event.key === 'Enter') {
          axios.get(url).then((response) => {
              setData(response.data)
              console.log(response.data)
          })
          setLocation('')
      }
      
  }
  
  return (
    <div>
      <h1 className="title">Mété<img src={sun} alt="sun" className="sun"/></h1>
        <div className="App">
        <div className="SearchBar">
         <input type="text" 
                    placeholder="Search for city" 
                    value={location}
                    onChange={event => setLocation(event.target.value)} 
                    onKeyPress={searchLocation}
                    />
        </div>
        <div className="result">
            <h2>{data.name}</h2>
            {data.main ? <h3>{data.main.temp.toFixed()}ºC</h3> : null}
            {data.weather ? <p>{data.weather[0].main}</p> : null}
       </div> 
        </div>
    </div>
    
  );
}

export default App;
