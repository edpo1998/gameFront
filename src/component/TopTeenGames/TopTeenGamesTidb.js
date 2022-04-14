import "./css/TopTeen.css"
import React, { useState, useEffect } from "react"
import socketIOClient from "socket.io-client"

const ENDPOINT = "http://localhost:5000/"

function TopTeenGamesTidb() {

  const [data, setData] = useState([])

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("ultimos_juegos_tidb", data => {
        setData(data)
    });
  }, []);


    function getData(data){
      if(data.length<10){
        return <h1>None Data</h1>
      }else{
        return (
          <>
          <div className="TopTeen__Container--first"><h2>🥇 Games {Object.keys(data[0])[0]}</h2></div>
          <div className="TopTeen__Container--second"><h2>🥈 Games {Object.keys(data[1])[0]}</h2></div>
          <div className="TopTeen__Container--third"><h2>🥉 Games {Object.keys(data[2])[0]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Games {Object.keys(data[3])[0]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Games {Object.keys(data[4])[0]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Games {Object.keys(data[5])[0]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Games {Object.keys(data[6])[0]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Games {Object.keys(data[7])[0]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Games {Object.keys(data[8])[0]}</h2></div>
          <div className="TopTeen__Container--default"><h2>◾️ Games {Object.keys(data[9])[0]}</h2></div>
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
  
  export default  TopTeenGamesTidb;