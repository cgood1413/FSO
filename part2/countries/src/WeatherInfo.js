import { useState, useEffect } from "react";
import axios from "axios";

const APIKEY = process.env.REACT_APP_OW_API_KEY;

const WeatherInfo = ({ latlng, name }) => {
  const [temp, setTemp] = useState();
  const [icon, setIcon] = useState("");
  const [lat, lon] = latlng;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKEY}`
      )
      .then(({ data }) => {
        setTemp(Math.round(data.main.temp));
        setIcon(data.weather[0].icon);
      });
  });

  return (
    <div>
      <h3>Weather Info for {name}</h3>
      {temp && icon ? (
        <>
          <p>The current temperature is {temp}℉</p>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather icon"
          />
        </>
      ) : (
        <p>Loading weather info...</p>
      )}
    </div>
  );
};

export default WeatherInfo;
