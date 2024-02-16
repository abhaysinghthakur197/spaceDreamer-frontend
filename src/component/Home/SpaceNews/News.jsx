
import { useState, useEffect } from "react";
import axios from 'axios'

import SpaceCard from "./SpaceCard";
import '../../../../src/index.css'


const Spaceapi = () => {

    const [news, setNews] = useState([]);
    const [showLogo, setShowLogo] = useState(true);



    useEffect(() => {
        async function getNews() {
            try {
                setTimeout(function () {
                }, 20000);
                const res = await axios.get("https://api.spaceflightnewsapi.net/v3/articles");
                setNews(res.data);
            } catch (err) {
                console.log("Error fetching data");
            }
        }
        getNews()

        const timer = setTimeout(() => {
            setShowLogo(false);
        }, 3100);

        return () => clearTimeout(timer); 
    }, []);

    return (
        <div className="Space-container mt-5">
            <div className="container">
                <h2 className='text-center text-white font-family-Helvetica, Arial, sans-serif py-2 my-2'>SP<span className='text-danger'>A</span>CE <span>News Box</span></h2>
                <p className="text-center text-white">Top 10 space industry news of the day is here for you, Check OUT! </p>
            </div>
            {/* {news.length === 0 ? (<img className="Loading_img" src={process.env.PUBLIC_URL + './Logo.png'} alt="Loading" />) : (<SpaceCard news={news} />)} */}
            
            {showLogo && <img className="Loading_img" src={process.env.PUBLIC_URL + './Logo.png'} alt="Loading" />}
            {!showLogo && news.length === 0 && <h4 className="text-white text-center">No articles found</h4>}
            {!showLogo && news.length > 0 && <SpaceCard news={news} />}
        </div>
    )
}


export default Spaceapi;