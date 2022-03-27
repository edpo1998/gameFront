import './css/Tidis.css';
import { useEffect } from "react";
import { Outlet } from 'react-router-dom';

function Tidis() {
  
  // Change Title in the first render
  useEffect(() => {
    (() => {document.getElementById("titlehead").innerText="Tidis"})();
  }, []);

  
  return (
    <div className="page" id='Tidis'>
      <Outlet/>
    </div>
  );
}

export default Tidis;
