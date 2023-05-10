import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     setLat(position.coords.latitude);
  //     setLong(position.coords.longitude);
  //   });
  //   console.log("Latitude is: ", lat);
  //   console.log("Longitude is: ", long);
  // }, [lat, long])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    console.log(window.navigator.geolocation.getCurrentPosition(function(position) {
      return position.coords.latitude;
    }));
    console.log("check window", window.location);
    console.log("Latitude is:", lat);
    console.log("Longitude is:", long)
  }, [lat, long]);

  return (
    <div className="App">

    </div>
  );
}

export default App;
