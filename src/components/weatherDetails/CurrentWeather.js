import { useEffect, useState } from "react";
import Moment from "react-moment";

// helpers
import { ALL_DESCRIPTIONS } from "../../helpers/weatherIcons";

// picturs
import realFeel from '../../assets/realFeel.svg'
import wind from '../../assets/wind.svg'
import cloud from '../../assets/cloud.svg'
import Humidity from '../../assets/humidity.svg'

// components
import Slider from "./Slider";

const CurrentWeather = ({ weatherData, weatherFrocastHourly }) => {

    const [currentDate, setCurrentDate] = useState()

    // find the picture of each days
    const pic = ALL_DESCRIPTIONS.filter(item =>
        item.description.toLocaleLowerCase() === weatherData.weather[0].description.toLocaleLowerCase() && item.icon
    )

    useEffect(() => {

        // current date for today
        let newDate = new Date()
        let date = newDate.toLocaleDateString();
        setCurrentDate(date)

    }, [weatherData])

    return (
        <div className="w-[100%]">

            {/* -------------------- CURRENT WEATHER -------------------- */}
            <div>
                <h2 className="pb-2 text-xs font-bold text-center text-gray-300 md:font-extrabold md:text-base">CURRENT WEATHER</h2>

                <div className="flex items-center justify-around">

                    {/* -------------------- col 1 -------------------- */}
                    <div className="text-center">
                        <h3 className="text-[13px] font-bold md:text-lg">{weatherData.name.toUpperCase()}, {weatherData.sys.country.toUpperCase()}</h3>
                        <p className="text-[10px] md:text-[13px] text-gray-300">
                            Today {' '}
                            <Moment format="D MMM" withTitle>
                                {currentDate}
                            </Moment>
                        </p>
                    </div>

                    {/* -------------------- col 2 -------------------- */}
                    <div className="text-center">
                        <h3 className="text-[13px] font-bold md:text-lg">{weatherData.main.temp.toFixed(0)} &deg;C</h3>
                        <p className="text-[10px] md:text-[13px] text-gray-300">{weatherData.weather[0].description}</p>
                    </div>

                    {/* -------------------- col 3 -------------------- */}
                    <div className="text-center">
                        <img alt="weather"
                            src={require(`../../assets/icons/${pic[0].icon}`)}
                            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
                        />
                    </div>

                </div>
            </div>


            {/* -------------------- AIR CONDITIONS -------------------- */}
            <div>
                <h2 className="pt-10 pb-2 text-xs font-bold text-center text-gray-300 md:font-extrabold md:text-base">AIR CONDITIONS</h2>

                <div className="flex items-center justify-around pt-3">

                    {/* -------------------- Real Feel -------------------- */}
                    <div className="text-center">
                        <div className="flex flex-col items-center gap-1 pb-2 md:flex-row">
                            <img src={realFeel} alt="" className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
                            <p className="text-[10px] md:text-[14px] text-gray-300">Real Feel</p>
                        </div>
                        <h3 className="text-[13px] font-bold md:text-lg">{weatherData.main.feels_like.toFixed(0)} &deg;C</h3>
                    </div>

                    {/* -------------------- Wind -------------------- */}
                    <div className="text-center">
                        <div className="flex flex-col items-center gap-1 pb-2 md:flex-row">
                            <img src={wind} alt="" className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
                            <p className="text-[10px] md:text-[14px] text-gray-300">Wind</p>
                        </div>
                        <h3 className="text-[13px] font-bold md:text-lg">{weatherData.wind.speed.toFixed(2)} m/s</h3>
                    </div>

                    {/* -------------------- Clounds -------------------- */}
                    <div className="text-center">
                        <div className="flex flex-col items-center gap-1 pb-2 md:flex-row">
                            <img src={cloud} alt="" className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
                            <p className="text-[10px] md:text-[14px] text-gray-300">Clounds</p>
                        </div>
                        <h3 className="text-[13px] font-bold md:text-lg">{weatherData.clouds.all} %</h3>
                    </div>

                    {/* -------------------- Humidity -------------------- */}
                    <div className="text-center">
                        <div className="flex flex-col items-center gap-1 pb-2 md:flex-row">
                            <img src={Humidity} alt="" className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
                            <p className="text-[10px] md:text-[14px] text-gray-300">Humidity</p>
                        </div>
                        <h3 className="text-[13px] font-bold md:text-lg">{weatherData.main.humidity} m/s</h3>
                    </div>


                </div>
            </div>

            {/* -------------------- TODAY'S HOURLY FORECAST -------------------- */}
            <div>
                <h2 className="pt-10 pb-2 text-xs font-bold text-center text-gray-300 md:font-extrabold md:text-base">TODAY'S FORECAST</h2>

                <div className="w-[360px] md:w-[450px] m-auto mt-3 text-center">
                    {weatherFrocastHourly && <Slider weatherFrocastHourly={weatherFrocastHourly} />}
                </div>

            </div>

        </div>
    );
}

export default CurrentWeather;