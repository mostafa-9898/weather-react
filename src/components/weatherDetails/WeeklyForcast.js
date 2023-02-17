import { useEffect, useState } from "react";

// helpers
import { ALL_DESCRIPTIONS, WEEK_DAYS } from "../../helpers/weatherIcons";

// pictures
import realFeel from '../../assets/realFeel.svg'
import wind from '../../assets/wind.svg'
import cloud from '../../assets/cloud.svg'
import Humidity from '../../assets/humidity.svg'

const WeeklyForcast = ({ weatherFrocast }) => {

    const [dayPic, setDayPic] = useState();
    const [NameOfDays, setNameOfDays] = useState()
    const [forcastSixDays, setForcastSixDays] = useState()

    useEffect(() => {

        // get the future days
        const dayInWeek = new Date().getDay()
        const sliceDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek))
        setNameOfDays(sliceDays)
        // console.log(forcastDays);

        // get the some of data about weekly days detail
        let sixDays = weatherFrocast.list.slice(0, 6)
        setForcastSixDays(sixDays)
        // console.log(sixDays);

        // fide the pictures about weather for weekly weather
        const daysPicture = []

        for (let i = 0; i < ALL_DESCRIPTIONS.length; i++) {
            for (let j = 0; j < sixDays.length; j++) {

                if (ALL_DESCRIPTIONS[i].description.toLocaleLowerCase() === sixDays[j].weather[0].description.toLocaleLowerCase()) {
                    daysPicture.push(ALL_DESCRIPTIONS[i].icon)
                }

            }
        }

        setDayPic(daysPicture)
        // console.log(dayPic);

    }, [weatherFrocast])


    return (
        <>
            {dayPic && <div>

                <h2 className="pb-2 text-xs font-bold text-center text-gray-300 md:font-extrabold md:text-base">WEEKLY FORECAST</h2>

                <ul className="px-1">


                    {forcastSixDays &&
                        forcastSixDays.map((item, index) =>
                            <li key={index} className="flex items-center justify-between px-2 pl-3 py-[6px] my-1 bg-gray-200 rounded-lg bg-opacity-5">

                                {/* -------------------- col 1 -------------------- */}
                                <div className="flex flex-col items-start gap-[5px] w-[40%]">

                                    <h3 className="text-sm md:font-bold">{NameOfDays[index]}</h3>

                                    <div className="flex items-center gap-1">

                                        <img alt="weather"
                                            src={require(`../../assets/icons/${dayPic[index]}`)}
                                            className="w-6 h-6 md:w-8 md:h-8"
                                        />

                                        <p className="text-[11px] md:text-[13px] text-gray-300">{item.weather[0].description}</p>

                                    </div>

                                </div>

                                {/* -------------------- col 2 -------------------- */}
                                <div className="flex flex-col items-center gap-2 w-[30%]">

                                    <div className="flex items-center gap-1">
                                        <img src={realFeel} alt="" className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
                                        <h3 className="text-xs md:text-sm md:font-bold">{item.main.temp.toFixed(0)} &deg;C</h3>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <img src={cloud} alt="" className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
                                        <h3 className="text-xs md:text-sm md:font-bold">{item.clouds.all} %</h3>
                                    </div>

                                </div>

                                {/* -------------------- col 3 -------------------- */}
                                <div className="flex flex-col items-center gap-2 w-[30%]">

                                    <div className="flex items-center gap-1">
                                        <img src={wind} alt="" className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
                                        <h3 className="text-xs md:text-sm md:font-bold">{item.wind.speed.toFixed(2)} m/s</h3>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <img src={Humidity} alt="" className="w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
                                        <h3 className="text-xs md:text-sm md:font-bold">{item.main.humidity} m/s</h3>
                                    </div>

                                </div>

                            </li>
                        )
                    }

                </ul>
            </div>}
        </>
    );
}

export default WeeklyForcast;