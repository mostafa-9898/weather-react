import { useEffect, useState } from "react";
import axios from "axios";

// api
import { WEATHER_API_KEY, WEATHER_API_URL } from "../services/openWeatherApi";

// components
import CurrentWeather from "./weatherDetails/CurrentWeather";
import WeeklyForcast from "./weatherDetails/WeeklyForcast";

const Weather = ({ latAndLon }) => {

    const [weatherData, setWeatherData] = useState();
    const [weatherFrocast, setWeatherForcast] = useState();
    const [weatherFrocastHourly, setWeatherForcastHourly] = useState();

    useEffect(() => {

        const { latitude, longitude } = latAndLon;
        // console.log(latitude, longitude);

        const currentWeatherFetch = async () =>
            await axios
                .request(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
                .then(res => {
                    setWeatherData(res.data);
                    // console.log(res.data);
                })

        const forecastFetch = async () =>
            await axios
                .request(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
                .then(res => {
                    setWeatherForcast(res.data);
                    // console.log(res.data);
                })

        const forecastHourly = async () =>
            await axios
                .request(`${WEATHER_API_URL}/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,alerts&appid=${WEATHER_API_KEY}&units=metric`)
                .then(res => {
                    setWeatherForcastHourly(res.data);
                    // console.log(res.data);
                })

        currentWeatherFetch()
        forecastFetch()
        forecastHourly()

    }, [latAndLon])

    return (

        <div className="flex flex-col pt-8 gap-7 lg:flex-row">
            <div className="w-[100%]" >
                {weatherData && <CurrentWeather weatherData={weatherData} weatherFrocastHourly={weatherFrocastHourly} />}
            </div>

            <div className="w-[100%]">
                {weatherFrocast && <WeeklyForcast weatherFrocast={weatherFrocast} />}
            </div>
        </div>

    );
}

export default Weather;