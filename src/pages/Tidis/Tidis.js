import './css/Tidis.css';
import NavBar from '../../component/NavBar/NavBar'

function Tidis() {
  (() => {document.getElementById("titlehead").innerText="Tidis"})();
  return (
    <div className="page" id='Tidis'>
      <NavBar raiz='redis' routes={["topgames","topplayers","stats"]}></NavBar>
      <h1> Hola soy Tidis </h1>
    </div>
  );
}

export default Tidis;
