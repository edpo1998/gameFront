import React, { useState, useEffect } from "react"
import "./css/Suscriber.css"
import CanvasJSReact from "../../lib/canvasjs.react"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

async function fetchDataJSON(urlLoadBalancer) {
  const response = await fetch(urlLoadBalancer);
  const data = await response.json();
  return data;
}


function Suscriber({urlData=""}) {

    const [suscriber1,setSuscriber1]= useState(0)
    const [suscriber2,setSuscriber2]= useState(0)

    useEffect(() => {
      const interval = setInterval(() => {
        fetchDataJSON(urlData).then(res =>{
          // Codigo para setear los suscribers
        })
       .catch(err => {
          setSuscriber1(50);
          setSuscriber2(50);
       });
      },5000)
    return () => clearInterval(interval);

    }, [urlData]);
  

    const optionsgraph = {
      title: {
        text: ""
      },
      data: [{				
                type: "column",
                dataPoints: [
                    { label: "Suscriber 1",  y: suscriber1  },
                    { label: "Suscriber 2", y: suscriber2  }
                ]
       }]
    }
    return (
      <div className="Suscriber">
        <div className="Suscriber__Container">
          <h1>Suscriber 1 vs Suscriber 2</h1>
          <CanvasJSChart options = {optionsgraph} />
        </div>
      </div>
    );
  }
  
  export default  Suscriber;