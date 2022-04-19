import "./css/TopTeen.css"
import React, { useState, useEffect } from "react"
import socketIOClient from "socket.io-client"

const ENDPOINT = "https://fase2-sopes1.uc.r.appspot.com/"

function TopTeenPlayersRedis() {

  const [data, setData] = useState([])

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("mejores_jugadores_redis", data => {
      setData(data)
        
    });
  }, []);


    function getData(data){
      if(data.length<10){
        return <h1>None Data</h1>
      }else{
        return (
          <>
          <div className="TopTeen__Container--first"><h2>🥇 Players {Object.keys(data[0])[0]}</h2></div>
          <div className="TopTeen__Container--second"><h2>🥈 Players {Object.keys(data[1])[0]}</h2></div>
          <div className="TopTeen__Container--third"><h2>🥉 Players {Object.keys(data[2])[0]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Players {Object.keys(data[3])[0]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Players {Object.keys(data[4])[0]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Players {Object.keys(data[5])[0]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Players {Object.keys(data[6])[0]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Players {Object.keys(data[7])[0]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Players {Object.keys(data[8])[0]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Players {Object.keys(data[9])[0]}</h2></div>
          </>
        )
      }
    }
    return (
      <div className="TopTeen">
        <div className="TopTeen__Container">
          <h1>🏆 Top teen Players</h1>
          {getData(data)}
        </div>
      </div>
    );
  }
  
  export default  TopTeenPlayersRedis;