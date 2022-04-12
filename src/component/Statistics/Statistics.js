import "./css/Statistics.css"
import React, { useState, useEffect } from "react"
import {FormControl,Table} from 'react-bootstrap'

async function fetchDataJSON(urlLoadBalancer) {
  const response = await fetch(urlLoadBalancer);
  const data = await response.json();
  return data;
}


function Statistics({urlData=""}) {
  const [number,setNumber] = useState("")
  const [name,setName] = useState("")
  const [state,setState] = useState("")
  const [selection,setSelection] = useState(0)

  const changePlayer = (e)=>{
    if(e.target.value>0){
      console.log(`Selected ${e.target.value}`)
      setSelection(e.target.value)
    }else{
      setName("")
      setNumber("")
      setState("")
    }
  }  
  
  useEffect(() => {
    const interval = setInterval(() => {
      fetchDataJSON(urlData).then(res =>{
        // Codigo para actualizar los datos el valor a buscar es el selection
        console.log(selection)
      })
     .catch(err => {
      setName("None")
      setNumber("None")
      setState("None")
     });
    },5000)
  return () => clearInterval(interval);
  }, [urlData,selection]);


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