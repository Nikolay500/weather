import React, { useState, useEffect, lazy, Suspense } from "react"
import { getWeather, IWeather } from "./apiOpenWeatherMap/weatherApi"
import { getGeolocation } from "./apiGeolocation/getGeolocation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Loader from "./components/loading/loading"
import "./App.css"

const Weather = lazy(() => import("./components/weather/weather"))

const App:React.FC = () => {
  const [error, setError] = useState("")
  const [city, setCity] = useState("Moscow")
  const [weather, setWeather] = useState<IWeather>({ 
    base: "", 
    clouds: {
      all: 0
    }, 
    cod: 0, 
    coord: {
      lat: 0,
      lon: 0,
    }, 
    dt: 0, 
    id: 0, 
    main: { 
      feels_like: 0, 
      humidity: 0, 
      pressure: 0, 
      temp: 0, 
      temp_max: 0, 
      temp_min: 0, 
    }, 
    name: "", 
    sys: { 
      country: "", 
      id: 0, 
      sunrise: 0, 
      sunset: 0, 
      type: 0, 
    }, 
    timezone: 0, 
    visibility:  0, 
    weather: [
      { 
        description: "", 
        icon: "", 
        id: 0, 
        main: "" 
      },
    ],
    wind: { 
      deg: 0, 
      gust: 0, 
      speed: 0, 
    }
  })

  const getWeatherFunc = (city: string) => {
    getWeather(city)
      .then((data) => {
        if (data.cod === 200) {
          setWeather(data)
          setError("")
        } else {
          setError(data.message)
        }
      })
      .catch((error) => setError(error.message))
  }
  
  useEffect(() => {
    getGeolocation()
      .then((data: string) => {
        setCity(data)
        getWeatherFunc(data)
      })
  }, [])
  
  const buttonFunc = () => {
    getWeatherFunc(city)
  }
  
  const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      getWeatherFunc(city)
      console.log(weather);
    }
  }


  
  
  return(
    <div className="app">
      <div className="search-div">
        <input className="search-input" type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} onKeyPress={(e) => keyDown(e)} />
        <button className="set-city-button" onClick={() => buttonFunc()}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </div>
      <Suspense fallback={<Loader />}>
        {error ? <p className="error">{error}</p> : <Weather weather={weather} />}
      </Suspense>
      
      
    </div>
  )
}

export default App;
  

// 0d317387d48b93a53aacc84b2feb592f