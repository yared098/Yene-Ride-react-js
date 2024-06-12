// src/components/RideHistory.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';

const RideHistory = () => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchRideHistory = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'history'));
        const fetchedRides = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRides(fetchedRides);
      } catch (error) {
        console.error('Error fetching ride history:', error);
      }
    };

    fetchRideHistory();
  }, []);

  return (
    <div>
      <h1>Ride History</h1>
      <ul>
        {rides.map(ride => (
          <li key={ride.id}>
            <p>Car ID: {ride.carId}</p>
            <p>Date: {ride.date.toDate().toLocaleString()}</p>
            <p>Distance: {ride.distance} km</p>
            <p>Driver ID: {ride.driverId}</p>
            <p>End Date: {ride.endDate.toDate().toLocaleString()}</p>
            <p>End Location: {ride.endLocation.latitude}° N, {ride.endLocation.longitude}° E</p>
            <p>Model: {ride.model}</p>
            <p>Passenger ID: {ride.passengerId}</p>
            <p>Price: ${ride.price}</p>
            <p>Start Location: {ride.startLocation.latitude}° N, {ride.startLocation.longitude}° E</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RideHistory;
