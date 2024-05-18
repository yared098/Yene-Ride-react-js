import React from 'react';

const Rides = () => {
  const rides = [
    { id: 1, from: 'Location A', to: 'Location B', status: 'Booked' },
    { id: 2, from: 'Location C', to: 'Location D', status: 'Available' },
  ];

  return (
    <div>
      <h2>Rides</h2>
      <ul>
        {rides.map(ride => (
          <li key={ride.id}>
            From: {ride.from} To: {ride.to} - {ride.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rides;
