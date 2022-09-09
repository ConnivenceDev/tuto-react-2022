import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Countries = () => {

    const [data, setData] = useState([]);

    //Le useEffect se joue lorsque le composant est monté

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data))
    }, [])

    return (
        <div className='countries'>

        </div>
    );
};

export default Countries;