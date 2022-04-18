import "./css/Statistics.css"
import React, { useState, useEffect } from "react"
import {FormControl,Table} from 'react-bootstrap'
import socketIOClient from "socket.io-client"


const ENDPOINT = "http://localhost:5000/"

function Statistics() {

  const [number,setNumber] = useState("")
  const [name,setName] = useState("")
  const [state,setState] = useState("")
  const [selection,setSelection] = useState(0)

  const changePlayer = (e)=>{
    if(e.target.value>0){
      setSelection(e.target.value)
    }else{
      setName("")
      setNumber("")
      setState("")
    }
  }  

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    
    socket.on("total_juegos_redis", data => {
      setState(data)
    });

    socket.on("estadisticas_jugador_redis", data => {
      const playerobj = data.find((player)=> Object.keys(player)[0] == selection)
      if(playerobj){
        setNumber(Object.keys(playerobj)[0])
        setName(Object.values(playerobj)[0])
      }else{
        setNumber("None")
        setName("None")
        setState("None")
      }
    
  });

  });
  


  return (
      <div className="Statistics">
        <div className="Statistics__Container">
          <div className="Statistics__Container__Val">
            <h1>🏆 Statistics Player</h1>
            <FormControl 
            size="lg" 
            type="number"  
            defaultValue={0}  
            min={0} 
            style={{width:"100px"}}
            onChange={(e)=>changePlayer(e)} 
            />
          </div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name Player</th>
                <th>Count Games</th>
                <th>Count Winners</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{number}</td>
                <td>{name}</td>
                <td>{state}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
  
  export default  Statistics;