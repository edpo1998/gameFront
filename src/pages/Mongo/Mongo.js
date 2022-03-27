
import './css/Mongo.css';
import NavBar from '../../component/NavBar/NavBar'

function Mongo() {
  (() => {document.getElementById("titlehead").innerText="Mongo"})();
  return (
    <div className="Mongo">
      <NavBar raiz='mongo' routes={["logs","topthree","suscriber"]}></NavBar>
      <h1> Hola soy Mongo </h1>
    </div>
  );
}

export default Mongo;
