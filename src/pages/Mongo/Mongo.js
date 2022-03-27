
import './css/Mongo.css';
import { Outlet } from 'react-router-dom';
import { useEffect } from "react";


function Mongo() {
  // Change Title in the first render
  useEffect(() => {
    (() => {document.getElementById("titlehead").innerText="Mongo"})();
  }, []);
  return (
    <div className="Mongo">
      <Outlet />
    </div>
  );
}

export default Mongo;
