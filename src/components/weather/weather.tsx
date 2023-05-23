import React, { useEffect, useState } from "react";
import { IWeather } from "../../apiOpenWeatherMap/weatherApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons"
import "./weather.css"

interface IWeatherProps{
  weather: IWeather
}

const Weather:React.FC<IWeatherProps> = ({ weather }) => {

    return(
        <div className="weather">
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" className="weather-icon" />
        <p className="temp">{weather.main.temp.toFixed()}&#176;c</p>
        <h3 className="city">{weather.name}</h3>
        <div className="add-info">
          <div className="wraapper-div">
            <FontAwesomeIcon icon={faDroplet} />
            <div>
              <p>{weather.main.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="wraapper-div">
            <FontAwesomeIcon icon={faWind} />
            <div>
              <p>{(weather.wind.speed / (1000/3600)).toFixed(2)} km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Weather