import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckUser from './Pages/CheckUser';
import NearbyDrivers from './Pages/NearbyDrivers'; // Assuming you have a NearbyDrivers component

const App1 = () => {
  const userId = '1232dfg'; // Replace this with the actual user ID logic

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CheckUser userId={userId} />} />
        <Route path="/NearbyDrivers" element={<NearbyDrivers />} />
      </Routes>
    </Router>
  );
};

export default App1;
