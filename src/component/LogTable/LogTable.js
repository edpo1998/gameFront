
import './css/LogTable.css';
import React, { useState, useEffect } from "react"
import {Table} from 'react-bootstrap'

async function fetchDataJSON(urlLoadBalancer) {
  const response = await fetch(urlLoadBalancer);
  const data = await response.json();
  return data;
}

function LogTable({urlData}) {
  const [logs,setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchDataJSON(urlData).then(res =>{
        console.log(res)
        setLogs(res)
      })
     .catch(err => {
      setLogs([])
     });
    },5000)
  return () => clearInterval(interval);
  }, [urlData]);

  
  return (
    <div className="LogTable">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Gamer ID</th>
            <th>No. Players</th>
            <th>Game Name</th>
            <th>Winner</th>
            <th>Queue</th>
          </tr>
        </thead>
        <tbody>
        {
           logs.map((row)=>(
             <tr>
                <td>{row.juegoid}</td>
                <td>{row.cantjugadores}</td>
                <td>{row.nombrejuego}</td>
                <td>{row.jugadorganador}</td>
                <td>{row.queue}</td>
             </tr>
           ))
         }
        </tbody>
      </Table>
    </div>
  );
}

export default  LogTable;