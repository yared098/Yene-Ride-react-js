import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import RideHistoryPage from './drawers/RideHistoryPage';
import NearbyDrivers from "./Pages/NearbyDrivers"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <NearbyDrivers/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
