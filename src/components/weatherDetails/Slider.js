import { useEffect, useState } from 'react';
import Moment from 'react-moment';

// helpers
import { ALL_DESCRIPTIONS } from '../../helpers/weatherIcons';

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Slider = ({ weatherFrocastHourly }) => {

    const [hourlyPic, setHourlyPic] = useState()
    const [hoursData, setHoursData] = useState()

    useEffect(() => {

        // get the some of data about hours detail
        let hours = weatherFrocastHourly.hourly.slice(0, 21)
        setHoursData(hours)
        // console.log(hours);

        // fide the pictures about weather for hourly weather
        const hoursPicture = []
        for (let i = 0; i < ALL_DESCRIPTIONS.length; i++) {
            for (let j = 0; j < hours.length; j++) {

                if (ALL_DESCRIPTIONS[i].description.toLocaleLowerCase() === hours[j].weather[0].description.toLocaleLowerCase()) {
                    hoursPicture.push(ALL_DESCRIPTIONS[i].icon)
                }

            }
        }
        setHourlyPic(hoursPicture)
        // console.log(hoursPicture);

    }, [weatherFrocastHourly])

    return (
        <>
            {hoursData &&
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    grabCursor={true}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 4,
                        },
                        "@0.75": {
                            slidesPerView: 4,
                        },
                        "@1.00": {
                            slidesPerView: 5,
                        },
                        "@1.50": {
                            slidesPerView: 5,
                        },
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {hoursData.map((item, index) =>

                        <SwiperSlide key={item.dt} className="text-white pb-11">
                            <div className='px-2 py-[6px] my-1 bg-gray-200 rounded-lg bg-opacity-5'>

                                <Moment unix format="HH:MM" className='text-[11px] md:text-[13px]'>{item.dt}</Moment>


                                <div className='flex justify-center pt-2'>
                                    <img alt="weather"
                                        src={require(`../../assets/icons/${hourlyPic[index]}`)}
                                        className="w-6 h-6 md:w-10 md:h-10"
                                    />
                                </div>

                                <h3 className="text-[13px] font-bold md:text-lg">{item.temp.toFixed(0)} &deg;C</h3>

                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            }
        </>
    );
}

export default Slider;