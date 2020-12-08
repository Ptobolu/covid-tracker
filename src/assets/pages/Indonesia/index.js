import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Indonesia = () => {
    const [ confirmed, setConfirmed] = useState([]);
    const [ treat, setHealed] = useState([]);
    const [ recovered,setRecovered  ] = useState([]);
    const [ deaths, setDeaths ] = useState([]);

    useEffect(() =>{
        axios.get('https://indonesia-covid-19.mathdro.id/api').then((res) => {
        setConfirmed(res.data.jumlahKasus);
        setHealed(res.data.perawatan);
        setRecovered(res.data.sembuh);
        setDeaths(res.data.meninggal);
    });
}, []);

    return (
        <div>
            <p>Kasus Seluruh Dunia</p>
            <div>
                <h2>Theat : {treat} </h2>
                <h2>Confirmed : {confirmed} </h2>
                <h2>Recovered : {recovered} </h2>
                <h2>Deaths : {deaths} </h2>
            </div>
        </div>
    );
};

export default Indonesia
