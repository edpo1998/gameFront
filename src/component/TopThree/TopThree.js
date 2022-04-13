import "./css/TopThree.css"
import React, { useState, useEffect } from "react"


async function fetchDataJSON(urlLoadBalancer) {
  const response = await fetch(urlLoadBalancer);
  const data = await response.json();
  return data;
}


function TopThree({ urlData = "" }) {
  let lista_juegos = ["La_posicion_de_la_Suerte", "Juego_Random", "Pelea_Impares_Pares", "Ruleta_no_rusa", "La_Ultima_Bala"];
  let lista_top_tres = [];
  let cantidad_juegos = [0, 0, 0, 0, 0];
  const [data, setData] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      lista_juegos = ["La_posicion_de_la_Suerte", "Juego_Random", "Pelea_Impares_Pares", "Ruleta_no_rusa", "La_Ultima_Bala"];
      cantidad_juegos = [0, 0, 0, 0, 0];
      fetchDataJSON(urlData).then(res => {
        res.map((row) => {
          if (row.nombrejuego == "La_Ultima_Bala") {
            cantidad_juegos[4]++;
          } else if (row.nombrejuego == "Ruleta_no_rusa") {
            cantidad_juegos[3]++;
          } else if (row.nombrejuego == "Pelea_Impares_Pares") {
            cantidad_juegos[2]++;
          } else if (row.nombrejuego == "Juego_Random") {
            cantidad_juegos[1]++;
          } else if (row.nombrejuego == "La_posicion_de_la_Suerte") {
            cantidad_juegos[0]++;
          }
        })
        for (let i = 0; i < lista_juegos.length - 1; i++) { /*pasadas*/
          for (let j = i + 1; j < lista_juegos.length; j++) {
            if (cantidad_juegos[i] < cantidad_juegos[j]) {
              /*intercambio*/
              let aux = cantidad_juegos[i];
              cantidad_juegos[i] = cantidad_juegos[j];
              cantidad_juegos[j] = aux;

              aux = lista_juegos[i];
              lista_juegos[i] = lista_juegos[j];
              lista_juegos[j] = aux;
            }
          }
        }
        console.log(lista_juegos)
        console.log(cantidad_juegos)
        lista_top_tres = [lista_juegos[0].toString(),lista_juegos[1].toString(),lista_juegos[2].toString()];
        console.log(lista_top_tres)
        setData(lista_top_tres);
      })
        .catch(err => {
          setData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        });
    }, 5000)
    return () => clearInterval(interval);
  }, [urlData]);

  function getData(data) {
    if (data.length < 3) {
      return <h1>None Data</h1>
    } else {
      return (
        <>
          <div className="TopThree_Container--first"><h2>🥇Game {data[0]}</h2></div>
          <div className="TopThree_Container--second"><h2>🥈Game {data[1]}</h2></div>
          <div className="TopThree_Container--third"><h2>🥉Game {data[2]}</h2></div>
        </>
      )
    }
  }

  return (
    <div className="TopThree">
      <div className="TopThree_Container">
        <h1>🏆 Top three Games</h1>
        {getData(data)}
      </div>
    </div>
  );
}

export default TopThree;