
import './css/Home.css';
import { useEffect } from "react";
function Home() {
  
  // Change Title in the first render
  useEffect(() => {
    (() => {document.getElementById("titlehead").innerText="Home"})();
  }, []);

  
  return (
    <div className="Home">
      <div className="Home__Container">
        <h1> Hellow 👋 I'm USAC Squid Game </h1>
      </div>
    </div>
  );
}

export default Home;
