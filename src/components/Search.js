import { useEffect, useState } from "react";
import axios from "axios";

// geo api
import { geoApiOptions, GEO_API_URL } from "../services/geoApi";

const Search = ({ setLatAndLon }) => {

    const [inputSearch, setInputSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const searchHandler = (e) => {
        setInputSearch(e.target.value)
    }

    useEffect(() => {

        if (inputSearch.length >= 3) {
            axios
                .request(`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputSearch}`, geoApiOptions)
                .then(response => {
                    setSearchResult(response.data.data)
                    // console.log(response.data);
                })
            // .catch(function (error) { console.error(error); });
        }

        if (inputSearch.length == 0) {
            setSearchResult([])
        }

    }, [inputSearch])

    const resultClickHandler = (item) => {
        setInputSearch('')
        setSearchResult([])
        setLatAndLon({
            latitude: item.latitude,
            longitude: item.longitude
        })
        // console.log('latitude:', item.latitude);
        // console.log('longitude:', item.longitude);
    }

    return (
        <div className="relative py-2 w-[100%]">

            {/* -------------------- input Search -------------------- */}
            <div className="relative">
                <input
                    className="w-full px-2 py-2 text-base text-black rounded-[4px] outline-blue-500"
                    placeholder='search for city'
                    value={inputSearch}
                    onChange={searchHandler}
                />
                {inputSearch && (
                    <div className="absolute text-gray-600 top-2 right-3">
                        <p onClick={() => setInputSearch('')} className='pl-1 border-l cursor-pointer'>
                            clear
                        </p>
                    </div>
                )}
            </div>

            {/* -------------------- Search Result -------------------- */}
            <div className={`absolute my-3 mt-1 text-black bg-white rounded-md left-0 right-0 ${searchResult ? '' : 'hidden'}`}>
                <ul className="flex flex-col justify-center">
                    {searchResult.map(item =>
                        <li key={item.latitude}
                            className="px-3 py-2 rounded-md cursor-pointer hover:bg-blue-100"
                            onClick={() => resultClickHandler(item)}
                        >
                            {item.name}, {item.countryCode}
                        </li>
                    )}
                </ul>
            </div>

        </div>
    );
}

export default Search;