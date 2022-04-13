import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './report/reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import './css/index.css';

import Home from './pages/Home/Home';
import Mongo from './pages/Mongo/Mongo';
import LogTable from './component/LogTable/LogTable';
import TopThree from './component/TopThree/TopThree';
import Suscriber from './component/Suscriber/Suscriber';
import Redis from './pages/Redis/Redis';
import Statistics from './component/Statistics/Statistics';
import TopTeen from './component/TopTeen/TopTeen';
import Tidis from './pages/Tidis/Tidis';
import NavBar from './component/NavBar/NavBar'


const URL_TOPTEENP_REDIS="endpoint"
const URL_TOPTEENG_REDIS="endpoint"
const URL_STATISTICS_REDIS="endpoint"

const URL_TOPTEENP_TIDB="endpoint"
const URL_TOPTEENG_TIDB="endpoint"
const URL_STATISTICS_TIDB="endpoint"

const URL_LOGS_MONGO="http://localhost:4000/get-logs"
const URL_TOPTHRE_MONGO="http://localhost:4000/get-all"
const URL_SUSCRIBERS_MONGO ="http://localhost:4000/get-all"

ReactDOM.render(
  <React.StrictMode>
    <NavBar raiz='' routes={["mongo","redis","tidis"]}></NavBar>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/mongo" element={<Mongo/>}>
           <Route path="logs" element={<LogTable urlData={URL_LOGS_MONGO}/>}></Route>
           <Route path="topthree" element={<TopThree urlData={URL_TOPTHRE_MONGO}/>}></Route>
           <Route path="suscriber" element={<Suscriber urlData={URL_SUSCRIBERS_MONGO}/>}></Route>
        </Route>
        <Route path="/redis" element={<Redis />}>
           <Route path="topteengames" element={<TopTeen description='Game' urlData={URL_TOPTEENG_REDIS}/>}></Route>
           <Route path="topteenplayers" element={<TopTeen description='Player' urlData={URL_TOPTEENP_REDIS}/>}></Route>
           <Route path="statistics" element={<Statistics urlData={URL_STATISTICS_REDIS}/>}></Route>
        </Route>
        <Route path="/tidis" element={<Tidis />}> 
           <Route path="topteengames" element={<TopTeen description='Game' urlData={URL_TOPTEENG_TIDB}/>}></Route>
           <Route path="topteenplayers" element={<TopTeen description='Player' urlData={URL_TOPTEENP_TIDB}/>}></Route>
           <Route path="statistics" element={<Statistics urlData={URL_STATISTICS_TIDB}/>}></Route>
        </Route>  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
