import "./css/TopThree.css"
import React, { useState, useEffect } from "react"


async function fetchDataJSON(urlLoadBalancer) {
  const response = await fetch(urlLoadBalancer);
  const data = await response.json();
  return data;
}


function TopThree({urlData=""}) {
  const [data, setData] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchDataJSON(urlData).then(res =>{
        setData(res)
      })
     .catch(err => {
      setData([1,2,3,4,5,6,7,8,9,10])
     });
    },5000)
  return () => clearInterval(interval);
  }, [urlData]);

  function getData(data){
    if(data.length<10){
      return <h1>None Data</h1>
    }else{
      return (
        <>
          <div className="TopThree_Container--first"><h2>🥇Game {data[0]}</h2></div>
          <div className="TopThree_Container--second"><h2>🥈Game {data[1]}</h2></div>
          <div className="TopThree_Container--third"><h2>🥉Game {data[2]}</h2></div>
        </>
      )
    }
  }

    return (
      <div className="TopThree">
        <div className="TopThree_Container">
          <h1>🏆 Top three Games</h1>
          {getData(data)}
        </div>
      </div>
    );
  }
  
  export default  TopThree;