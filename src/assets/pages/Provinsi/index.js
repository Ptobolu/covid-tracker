import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Provinsi = () => {
    const [ dat, setData] = useState([]);

    useEffect(() =>{
        axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi').then((res) => {
        setData(res.data.data);
        console.log(res.data.data)
    });
}, []);

    return (
        <div>
            <p>Kasus Per-Provinsi</p>
            <div>
                {dat && 
                dat.map((glob) => {
                    const {fid, provinsi, kasusPosi, kasusSemb, kasusMeni } = glob;
                    return (
                        <div key={fid}>
                            <div className="provinsi">
                            <h2> {provinsi} </h2>
                            <h2>Positiv {kasusPosi} </h2>
                            <h3>Sembuh {kasusSemb} </h3>
                            <h3>Meninggal {kasusMeni} </h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default Provinsi
