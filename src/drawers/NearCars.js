import React from 'react';

const NearCars = () => {
  const nearCars = [
    { id: 1, name: 'Car 1', distance: '0.5 km' },
    { id: 2, name: 'Car 2', distance: '1.2 km' },
    { id: 3, name: 'Car 3', distance: '2.1 km' },
  ];

  return (
    <div>
      <h2>Nearby Cars</h2>
      <ul>
        {nearCars.map(car => (
          <li key={car.id}>
            {car.name} - {car.distance} away
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NearCars;
