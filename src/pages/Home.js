import { useState } from "react";

// components
import Weather from "../components/Weather";
import Header from "../components/Header";
import Search from "../components/Search";
import Empty from "../components/Empty";



const Home = () => {
    document.title = "Weather"
    const [latAndLon, setLatAndLon] = useState()
    // console.log(latAndLon);

    return (
        <div
            className="min-h-[100vh] md:pt-8 pt-3
            bg-gradient-to-r from-[#005469] via-[#066d86] to-[#3e9bbd]
             dark:from-[rgba(0,29,36,1)] dark:via-[rgba(4,43,54,1)] dark:to-[#0b4457]
            ">

            <div className="md:w-[90%] min-h-[90vh] lg:w-[75%] md:rounded-2xl m-auto md:shadow md:shadow-white px-3 pb-5 md:px-4 lg:px-5">
                <Header />
                <Search setLatAndLon={setLatAndLon} />
                {latAndLon ? <Weather latAndLon={latAndLon} /> : <Empty />}
            </div>

        </div>
    );
}

export default Home;