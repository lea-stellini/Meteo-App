import './App.css';
import sun from './sun.png';
import React, { useState } from "react";
import axios from "axios";


function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${API_KEY}`;

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
            {data.weather ? <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}  className="icon"/> : null}
       </div> 
        </div>
    </div>
    
  );
}

export default App;
