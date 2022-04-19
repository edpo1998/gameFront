import "./css/TopTeen.css"
import React, { useState, useEffect } from "react"
import socketIOClient from "socket.io-client"
const ENDPOINT = "https://fase2-sopes1.uc.r.appspot.com/"

function TopTeenPlayersTidb() {

  const [data, setData] = useState([])

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("mejores_jugadores_tidb", data => {
        setData(data)
    });
  }, []);


    function getData(data){
      if(data.length<10){
        return <h1>None Data</h1>
      }else{
        return (
          <>
          <div className="TopTeen__Container--first"><h2>🥇 Players {data[0].nombre_ganador}</h2></div>
          <div className="TopTeen__Container--second"><h2>🥈 Players {data[1].nombre_ganador}</h2></div>
          <div className="TopTeen__Container--third"><h2>🥉 Players {data[2].nombre_ganador}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Players {data[3].nombre_ganador}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Players {data[4].nombre_ganador}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Players {data[5].nombre_ganador}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Players {data[6].nombre_ganador}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Players {data[7].nombre_ganador}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Players {data[8].nombre_ganador}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Players {data[9].nombre_ganador}</h2></div>
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
  
  export default  TopTeenPlayersTidb;