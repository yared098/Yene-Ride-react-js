import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import RideHistoryPage from './drawers/RideHistoryPage';
import NearbyDrivers from "./Pages/NearbyDrivers"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <NearbyDrivers/> */}
  </React.StrictMode>
);

reportWebVitals();
