// pictures
import splashIcon from '../assets/splash-icon.svg'

const Empty = () => {
    return (
        <div className="flex flex-col gap-8 items-center justify-center pt-[150px]">
            <img src={splashIcon} alt='' className='w-[100px] h-[100px] lg:w-[120px] lg:h-[120px]' />
            <h3 className='px-10 text-sm text-center text-gray-300 lg:text-base'>Explore current weather data and 6-day forecast of more than 200,000 cities!</h3>
        </div>
    );
}

export default Empty;