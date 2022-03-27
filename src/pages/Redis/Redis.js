import './css/Redis.css';
import { Outlet } from 'react-router-dom';
import { useEffect } from "react";

function Redis() {

  // Change Title in the first render
  useEffect(() => {
    (() => {document.getElementById("titlehead").innerText="Redis"})();
  }, []);

  
  return (
    <>
      <div className="Redis">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Redis;