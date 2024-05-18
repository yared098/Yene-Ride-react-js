import React from 'react';

const History = () => {
  const history = [
    { id: 1, from: 'Location X', to: 'Location Y', date: '2024-05-01', status: 'Completed' },
    { id: 2, from: 'Location Z', to: 'Location W', date: '2024-04-28', status: 'Cancelled' },
  ];

  return (
    <div>
      <h2>Ride History</h2>
      <ul>
        {history.map(ride => (
          <li key={ride.id}>
            From: {ride.from} To: {ride.to} - {ride.date} ({ride.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
