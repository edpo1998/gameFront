
import './css/LogTable.css';
import { useState } from "react";
import {Table} from 'react-bootstrap'

const data = [
  {
    game_id: 2,
    players: 23,
    game_name:"Random",
    winner:2,
    queue:"Rabbit"
  },
  {
    game_id: 2,
    players: 23,
    game_name:"Random",
    winner:2,
    queue:"Rabbit"
  },
  {
    game_id: 2,
    players: 23,
    game_name:"Random",
    winner:2,
    queue:"Rabbit"
  },
  {
    game_id: 2,
    players: 23,
    game_name:"Random",
    winner:2,
    queue:"Rabbit"
  }  
]
function LogTable() {
  const [logs,setLogs] = useState(data);

  //setLogs(data)
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
                <td>{row.game_id}</td>
                <td>{row.players}</td>
                <td>{row.game_name}</td>
                <td>{row.winner}</td>
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