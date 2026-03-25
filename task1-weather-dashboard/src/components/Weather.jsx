import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsWind } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  function handleOnChange(e) {
    setCity(e.target.value);
  }

  const fetchData = async () => {
    try {
      let resp = await fetch(url);
      let data = await resp.json();
      if (resp.ok) {
        setWeather(data);
        console.log(data);
        setError("");
      } else {
        setError("No City Found, Enter Valid City Name.");
      }
    } catch (err) {}
  };
  return (
    <div className="container">
      <div className="city">
        <input
          type="text"
          value={city}
          onChange={handleOnChange}
          name="cityname"
          placeholder="Enter The City Name : "
        />
        <button onClick={() => fetchData()}>
          <FaSearch />
        </button>
      </div>
      {error && <p className="err-msg">{error}</p>}
      {weather && weather.weather && (
        <div className="content">
          <div className="weather-img">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather-logo"
            ></img>
            <h3 className="desc">{weather.weather[0].description}</h3>
          </div>
          <div className="weather-temp">
            <h2>
              {weather.main.temp}
              <span> &deg;C</span>
            </h2>
          </div>
          <div className="weather-city">
            <div className="location">
              <MdLocationOn />
            </div>
            <p>
              {weather.name} , <span>{weather.sys.country}</span>
            </p>
          </div>
          <div className="weather-stats">
            <div className="wind">
              <div className="wind-icon">
                <BsWind />
              </div>
              <h3 className="wind-speed">
                {weather.wind.speed} <span>Km/Hr</span>
              </h3>
              <h3 className="wind-heading">wind speed</h3>
            </div>
            <div className="humidity">
              <div className="humidity-icon">
                <WiHumidity/>
              </div>
              <h3 className="humidity-per">
                {weather.main.humidity} <span>%</span>
              </h3>
              <h3 className="humidity-heading">humidity</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
