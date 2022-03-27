import './css/Redis.css';
import NavBar from '../../component/NavBar/NavBar'

function Redis() {
  (() => {document.getElementById("titlehead").innerText="Redis"})();
  return (
    <div className="Redis">
      <NavBar raiz='redis' routes={["topgames","topplayers","stats"]}></NavBar>
      <h1> Hola soy Redis </h1>
    </div>
  );
}

export default Redis;