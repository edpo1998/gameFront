import "./css/TopTeen.css"
import React, { useState, useEffect } from "react"
import socketIOClient from "socket.io-client"
const ENDPOINT = "https://fase2-sopes1.uc.r.appspot.com/"

function TopTeenGamesRedis() {

  const [data, setData] = useState([])

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("ultimos_juegos_redis", data => {
        setData(data)
        console.log(data)
    });
  }, []);


    function getData(data){
      if(data.length<10){
        return <h1>None Data</h1>
      }else{
        return (
          <>
          <div className="TopTeen__Container--first"><h2>🥇 Games {data[0]}</h2></div>
          <div className="TopTeen__Container--second"><h2>🥈 Games {data[1]}</h2></div>
          <div className="TopTeen__Container--third"><h2>🥉 Games {data[2]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Games {data[3]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Games {data[4]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Games {data[5]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Games {data[6]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Games {data[7]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Games {data[8]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Games {data[9]}</h2></div>
          </>
        )
      }
    }
    return (
      <div className="TopTeen">
        <div className="TopTeen__Container">
          <h1>🏆 Top teen Games</h1>
          {getData(data)}
        </div>
      </div>
    );
  }
  
  export default  TopTeenGamesRedis;