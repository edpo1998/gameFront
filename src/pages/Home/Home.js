
import './css/Home.css';
import { useEffect } from "react";
import NavBar from '../../component/NavBar/NavBar'
function Home() {
  
  // Change Title in the first render
  useEffect(() => {
    (() => {document.getElementById("titlehead").innerText="Home"})();
  }, []);

  
  return (
    <div className="Home">
      
      <h1> Hola Mundo </h1>
    </div>
  );
}

export default Home;
