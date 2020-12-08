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
            <p>Kasus di Indonesia</p>
            <div className="indo">
                <h2>Di Rawat: {treat} </h2>
                <div className="pos">
                <h2>Positif: {confirmed} </h2>
                <div className="sem">
                <h2>Sembuh : {recovered} </h2>
                <div className="mening">
                <h2>Meninggal : {deaths} </h2>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Indonesia
