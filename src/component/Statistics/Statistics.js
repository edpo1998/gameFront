import "./css/Statistics.css"
import { useState } from "react"
import {FormControl,Table} from 'react-bootstrap'
function Statistics() {
  const [number,setNumber] = useState("")
  const [name,setName] = useState("")
  const [state,setState] = useState("")
  
  const changePlayer = (e)=>{
    if(e.target.value>0){
      console.log(`Selected ${e.target.value}`)
    }else{
      setName("")
      setNumber("")
      setState("")
    }
  }  
  
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
                <th>Game Number</th>
                <th>Game Name</th>
                <th>State</th>
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