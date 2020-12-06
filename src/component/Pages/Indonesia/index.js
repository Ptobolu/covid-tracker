import Axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';


const Indonesia = () => {
    const [loadingData,setLoadingData] = useState(true);
    const columns = useMemo(() => [
        {
          Header: "State",
          accessor: "state",
        },
        {
          Header: "Positive Cases",
          accessor: "positive",
        },
        {
          Header: "Recovered Cases",
          accessor: "recovered",
        },
      ]);
      const [data,setData] = useState([]);

      useEffect(() =>{
          async function getData(){
              await Axios
              .get ("https://covid19.mathdro.id/api")
              .then((Response) =>{
                  console.log(Response.data);
                  setData(Response.data);
                  setLoadingData(false);
              });
          }
          if(loadingData){
              getData();
          }
},[]);
    return (
        <div className="Indonesia">
            {loadingData ?(
            <p>Loading Please Wait...</p>
            ):(
                <table columns={columns}data ={data}/>
            )}
        </div>
    );
}
export default Indonesia;
