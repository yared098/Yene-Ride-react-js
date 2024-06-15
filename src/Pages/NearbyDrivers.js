import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const NearbyDrivers = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [drivers, setDrivers] = useState([]);
  const [locationError, setLocationError] = useState(null);
  const [requestDialogOpen, setRequestDialogOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.error('Error getting location:', error);
          setLocationError(error.message);
        }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser.');
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      fetchNearbyDrivers(userLocation);
    }
  }, [userLocation]);

  const calculateDistance = (userLat, userLon, driverLat, driverLon) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(driverLat - userLat);
    const dLon = deg2rad(driverLon - userLon);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(userLat)) * Math.cos(deg2rad(driverLat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(2); // Distance in kilometers rounded to 2 decimal places
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const fetchNearbyDrivers = async (location) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Drivers'));
      const fetchedDrivers = querySnapshot.docs
        .map(doc => {
          const driver = doc.data();
          const distance = calculateDistance(location.latitude, location.longitude, driver.location.latitude, driver.location.longitude);
          return { id: doc.id, ...driver, distance };
        })
        .filter(driver => driver.distance <= 2); // Filter out drivers within 2km radius
      setDrivers(fetchedDrivers);
    } catch (error) {
      console.error('Error fetching nearby drivers:', error);
    }
  };

  const handleRequestRide = async (driverId) => {
    try {
      await addDoc(collection(db, 'Riding'), {
        userLocation,
        driverLocation: drivers.find(driver => driver.id === driverId).location,
        time: Timestamp.now(),
        driverId,
        senderId: 'userIdPlaceholder', // Replace 'userIdPlaceholder' with actual user ID
      });
      setRequestDialogOpen(true);
    } catch (error) {
      console.error('Error requesting ride:', error);
    }
  };

  const handleCloseRequestDialog = (data) => {
    setRequestDialogOpen(false);
   
  };

  return (
    <div>
      {/* <h1>Nearby Drivers</h1> */}
      {locationError && <p>{locationError}</p>}
      {userLocation ? (
        <div>
          {/* <p>Your location: {userLocation.latitude}, {userLocation.longitude}</p> */}
          <List>
            {drivers.map(driver => (
              <ListItem key={driver.id}>
                <ListItemAvatar>
                  <Avatar src={driver.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={driver.name}
                  secondary={`Model: ${driver.model} | Rating: ${driver.rating} | Distance: ${driver.distance} km | Status: ${driver.status}`}
                />
                <Button variant="contained" color="primary" onClick={() => handleRequestRide(driver.id)}>Request Ride</Button>
              </ListItem>
            ))}
          </List>
        </div>
      ) : (
        <p>Loading your location...</p>
      )}
      <Dialog open={requestDialogOpen} onClose={handleCloseRequestDialog}>
        <DialogTitle>Ride Requested</DialogTitle>
        <DialogContent>
          Your ride request has been successfully sent. The driver will contact you soon.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseRequestDialog} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NearbyDrivers;
