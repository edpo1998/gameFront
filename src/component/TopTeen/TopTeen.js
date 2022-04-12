import "./css/TopTeen.css"
import React, { useState, useEffect } from "react"


async function fetchDataJSON(urlLoadBalancer) {
  const response = await fetch(urlLoadBalancer);
  const data = await response.json();
  return data;
}

function TopTeen({description ="None",urlData=""}) {

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
          <div className="TopTeen__Container--first"><h2>🥇 {description} {data[0]}</h2></div>
          <div className="TopTeen__Container--second"><h2>🥈 {description} {data[1]}</h2></div>
          <div className="TopTeen__Container--third"><h2>🥉 {description} {data[2]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ {description} {data[3]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ {description} {data[4]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ {description} {data[5]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ {description} {data[6]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ {description} {data[7]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ {description} {data[8]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ {description} {data[9]}</h2></div>
          </>
        )
      }
    }
    return (
      <div className="TopTeen">
        <div className="TopTeen__Container">
          <h1>🏆 Top teen {description}s</h1>
          {getData(data)}
        </div>
      </div>
    );
  }
  
  export default  TopTeen;