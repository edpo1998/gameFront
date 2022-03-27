import { useState } from "react";
import "./css/Suscriber.css"
import CanvasJSReact from "../../lib/canvasjs.react"
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
  title: {
    text: ""
  },
  data: [{				
            type: "column",
            dataPoints: [
                { label: "Suscriber 1",  y: 10  },
                { label: "Suscriber 2", y: 15  }
            ]
   }]
}

function Suscriber() {
    const [suscriber1,setSuscriber1]= useState(100)
    const [suscriber2,setSuscriber2]= useState(1000)


    const options = {
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
          <CanvasJSChart options = {options} />
        </div>
      </div>
    );
  }
  
  export default  Suscriber;