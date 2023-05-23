const key = "0d317387d48b93a53aacc84b2feb592f"

export interface IWeather {
    base: string;
    clouds: {
        all: number
    };
    cod: number
    coord: {
        lat: number;
        lon: number;
    };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility:  number;
    weather: [{
        description: string;
        icon: string;
        id: number;
        main: string;
    }];
    wind: {
        deg: number;
        gust: number;
        speed: number;
    };
}

export interface IWeatherError{
    cod: string;
    message: string;
}

export const getWeather = (city:string) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        .then((res) => res.json())
}