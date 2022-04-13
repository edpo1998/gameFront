import React, { useState, useEffect } from "react"
import "./css/Suscriber.css"
import CanvasJSReact from "../../lib/canvasjs.react"
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

async function fetchDataJSON(urlLoadBalancer) {
  const response = await fetch(urlLoadBalancer);
  const data = await response.json();
  return data;
}


function Suscriber({ urlData = "" }) {
  let lista_juegos = ["Kafka", "RabbitMQ"];
  let contador1, contador2;
  const [suscriber1, setSuscriber1] = useState(0)
  const [suscriber2, setSuscriber2] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      contador1 = 0;
      contador2 = 0;
      fetchDataJSON(urlData).then(res => {
        res.map((row) => {
          if (row.queue == "Kafka") {
            contador1++;
          } else if (row.queue == "RabbitMQ") {
            contador2++;
          }
        })
        console.log("Kafka: ", contador1)
        console.log("RabbitMQ: ", contador2)
        setSuscriber1(contador1);
        setSuscriber2(contador2);
      })
        .catch(err => {
          setSuscriber1(50);
          setSuscriber2(50);
        });
    }, 5000)
    return () => clearInterval(interval);

  }, [urlData]);


  const optionsgraph = {
    title: {
      text: ""
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Suscriber 1", y: suscriber1 },
        { label: "Suscriber 2", y: suscriber2 }
      ]
    }]
  }
  return (
    <div className="Suscriber">
      <div className="Suscriber__Container">
        <h1>Suscriber 1 vs Suscriber 2</h1>
        <CanvasJSChart options={optionsgraph} />
      </div>
    </div>
  );
}

export default Suscriber;