
import './css/Home.css';
import NavBar from '../../component/NavBar/NavBar'
function Home() {
  //Change Title
  (() => {document.getElementById("titlehead").innerText="Home"})();
  return (
    <div className="Home">
      <NavBar raiz='' routes={["mongo","redis","tidis"]}></NavBar>
      <h1> Hola Mundo </h1>
    </div>
  );
}

export default Home;
