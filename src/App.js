import './App.css';
import React, { useEffect, useState } from 'react';

import Weather from './components/weather/Weather';


function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
      
    function getPositon(position) {
      setLat(position.coords.latitude);
      setLong( position.coords.longitude);
      console.log("this is long: ", long);
      console.log("this is lat: ", lat);
      
     }

    const fetchData = async () => {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPositon);
      }
      else {
        console.log("Geolocation is not supported by this browser.")
      }
      console.log(process.env.REACT_APP_API_KEY);
      console.log(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result);
          console.log("data line 33", result);
        })
    }
    fetchData();
  }, [lat, long])

  return (
    <div className="App">
        {
          (typeof data.main != 'undefined') ? (
            <Weather weatherData={data} />
          ) : (
            <div></div>
          )
        }
    </div>
  );
}

export default App;
