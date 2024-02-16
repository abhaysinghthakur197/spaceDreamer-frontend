import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ArticleCard from './ArticleCard';

const UseraddNews = () => {

    // const BACKEND_URL = 'https://spacedreamer-backend.onrender.com'
    const [alldata, setalldata] = useState([]);
    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
        fetchDate();
        const timer = setTimeout(() => {
            setShowLogo(false);
        }, 2000);

        return () => clearTimeout(timer); 
    }, [])

    const fetchDate = async () => {
        try {
            await axios.get('http://localhost:8000/api').then(response => {
                console.log("all articles by users", response)
                setalldata(response.data)
            })
        } catch (e) {
            alert("Error while loading the data");
        }
    }
    // console.log(alldata)
    return (
        <div className='h-100'>
            <div className='my-5 mx-5 '>
                <h2 className='text-center text-white font-family-Helvetica, Arial, sans-serif'> News By SP<span className='text-danger'>A</span>CE <span className='text-warning'>DREAMER'<span className='text-white'>s</span></span></h2>
                <p className="text-center">Some of the news blogs added by our space dreamer user's. You can also add you space blog by just Sign Up/ Log In. You get the option of add space news.</p>
            </div>
            {/* {alldata.length === 0 ? (<img className="Loading_img" src={process.env.PUBLIC_URL + './Logo.png'} alt="Loading" />) : (<ArticleCard allArticle={alldata} />)} */}
            {showLogo && <img className="Loading_img" src={process.env.PUBLIC_URL + './Logo.png'} alt="Loading" />}
            {!showLogo && alldata.length === 0 && <h4 className='text-white text-center'>No articles found</h4>}
            {!showLogo && alldata.length > 0 && <ArticleCard allArticle={alldata} />}

        </div>
    )
}

export default UseraddNews;
