import React from 'react';
import { Box, Card, CardContent, Typography, Container, Avatar, Button } from '@mui/material';

const rideHistory = [
  {
    id: 1,
    driverName: 'John Doe',
    driverId: 'D001',
    carId: 'C001',
    lengthKm: 15.5,
    startPlace: 'Place A',
    endPlace: 'Place B',
    totalPrice: 30.75,
    carPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPc0B4qsl73-lkc6p1hMlXRT1xVmJ4kOa9Q&usqp=CAU',
    status: 'Online',
    phone: '123-456-7890'
  },
  {
    id: 2,
    driverName: 'Jane Smith',
    driverId: 'D002',
    carId: 'C002',
    lengthKm: 25.0,
    startPlace: 'Place C',
    endPlace: 'Place D',
    totalPrice: 50.00,
    carPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYjNYZFbiQzmdSwJLeq-o6Qoq9FEW9_FYAg&usqp=CAU',
    status: 'Riding',
    phone: '987-654-3210'
  },{
    id: 1,
    driverName: 'John Doe',
    driverId: 'D001',
    carId: 'C001',
    lengthKm: 15.5,
    startPlace: 'Place A',
    endPlace: 'Place B',
    totalPrice: 30.75,
    carPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPc0B4qsl73-lkc6p1hMlXRT1xVmJ4kOa9Q&usqp=CAU',
    status: 'Online',
    phone: '123-456-7890'
  },
  {
    id: 2,
    driverName: 'Jane Smith',
    driverId: 'D002',
    carId: 'C002',
    lengthKm: 25.0,
    startPlace: 'Place C',
    endPlace: 'Place D',
    totalPrice: 50.00,
    carPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYjNYZFbiQzmdSwJLeq-o6Qoq9FEW9_FYAg&usqp=CAU',
    status: 'Riding',
    phone: '987-654-3210'
  },{
    id: 1,
    driverName: 'John Doe',
    driverId: 'D001',
    carId: 'C001',
    lengthKm: 15.5,
    startPlace: 'Place A',
    endPlace: 'Place B',
    totalPrice: 30.75,
    carPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPc0B4qsl73-lkc6p1hMlXRT1xVmJ4kOa9Q&usqp=CAU',
    status: 'Online',
    phone: '123-456-7890'
  },
  {
    id: 2,
    driverName: 'Jane Smith',
    driverId: 'D002',
    carId: 'C002',
    lengthKm: 25.0,
    startPlace: 'Place C',
    endPlace: 'Place D',
    totalPrice: 50.00,
    carPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYjNYZFbiQzmdSwJLeq-o6Qoq9FEW9_FYAg&usqp=CAU',
    status: 'Riding',
    phone: '987-654-3210'
  },
  // Add more ride history as needed
];

function RideHistoryPage() {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Ride History
      </Typography>
      <Box sx={{ maxHeight: '80vh', overflowY: 'auto' }}>
        {rideHistory.map((ride) => (
          <Card
            key={ride.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              '&:hover': {
                boxShadow: 6,
                transform: 'scale(1.02)',
                transition: 'all 0.3s ease-in-out',
              },
              height: '130px',
            }}
          >
            <Avatar
              alt="Car Picture"
              src={ride.carPic}
              sx={{ width: 40, height: 40, margin: 2 }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>
                  {ride.driverName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'green', fontWeight: 'bold', fontSize: '0.75rem' }}>
                  ${ride.totalPrice.toFixed(2)}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'textSecondary', fontWeight: 'bold' }}>
                <Typography variant="body2">
                  Driver ID: {ride.driverId}
                </Typography>
                <Typography variant="body2">
                  Car ID: {ride.carId}
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>
                Length: {ride.lengthKm} km
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'textSecondary', fontWeight: 'bold' }}>
                <Typography variant="body2">
                  Start: {ride.startPlace}
                </Typography>
                <Typography variant="body2">
                  End: {ride.endPlace}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mt: 1, mb: 1, fontWeight: 'bold', fontSize: '0.75rem', color: ride.status === 'Online' ? 'green' : 'orange' }}>
                Status: {ride.status}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontSize: '0.75rem', padding: '4px 8px', margin: 2 }}
              onClick={() => window.open(`tel:${ride.phone}`, '_self')}
            >
              Call
            </Button>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default RideHistoryPage;
