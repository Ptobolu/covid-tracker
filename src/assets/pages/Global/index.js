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
            <div className="positif">
                <h2>Positif {confirmed} </h2>
                </div>
                <div className="sembuh">
               <h2>Sembuh  {recovered} </h2>
               </div>
               <div className="mati">
               <h2>Meninggal {deaths} </h2>
               </div>
        </div>
    );
};
export default Global;
