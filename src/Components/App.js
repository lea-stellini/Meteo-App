import React, { useState } from 'react';
import './App.css';
import sun from './sun.png';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

function App() {

  const [city, setCity] = useState([
    {ville: 'Rennes', temp: 11, img: 'sun', id:1},
  ])

  return (
    <div>
      <h1 className="title">Mété<img src={sun} alt="sun" className="sun"/></h1>
        <div className="App">
          <SearchBar />
          <SearchResult setCity={city}/>
        </div>
    </div>
    
  );
}

export default App;
