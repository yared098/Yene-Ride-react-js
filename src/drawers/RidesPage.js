import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Button, Container, Grid } from '@mui/material';

const rides = [
  {
    id: 1,
    driverName: 'John Doe',
    rate: 4.5,
    phone: '123-456-7890',
    carPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPc0B4qsl73-lkc6p1hMlXRT1xVmJ4kOa9Q&usqp=CAU',
    carNumber: 'ABC1234'
  },
  {
    id: 2,
    driverName: 'Jane Smith',
    rate: 4.8,
    phone: '987-654-3210',
    carPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqYjNYZFbiQzmdSwJLeq-o6Qoq9FEW9_FYAg&usqp=CAU',
    carNumber: 'XYZ5678'
  },
  // Add more rides as needed
];

function RidesPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Available Rides
      </Typography>
      <Grid container spacing={1}>
        {rides.map((ride) => (
          <Grid item xs={12} key={ride.id}>
            <Card>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  alt="Car Picture"
                  src={ride.carPic}
                  sx={{ width: 60, height: 60, mr: 2 }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6">{ride.driverName}</Typography>
                  <Typography variant="body2">Rate: {ride.rate}</Typography>
                  <Typography variant="body2">Phone: {ride.phone}</Typography>
                  <Typography variant="body2">Car Number: {ride.carNumber}</Typography>
                </Box>
                <Button variant="contained" color="primary">
                  Pick
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default RidesPage;
