import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Global = () => {
    const [ confirmed, setConfirmed] = useState([]);
    const [ recovered,setRecovered  ] = useState([]);
    const [ deaths, setDeaths ] = useState([]);

    useEffect(() =>{
        axios.get('https://covid19.mathdro.id/api').then((res) => {
        setConfirmed(res.data.confirmed.value);
        setRecovered(res.data.recovered.value);
        setDeaths(res.data.deaths.value);
    });
}, []);

    return (
        <div>
            <p>Kasus Seluruh Dunia</p>
            <div>
                <h2>Confirmed : {confirmed} </h2>
                <h2>Recovered : {recovered} </h2>
                <h2>Deaths : {deaths} </h2>
            </div>
        </div>
    );
};
export default Global;
