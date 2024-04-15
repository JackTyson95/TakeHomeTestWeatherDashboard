import React from 'react';
import WeatherCard from './WeatherCard';

const CityCards = () => {
  const cities = ["London", "Edinburgh", "Palma", "New York"];

  return (
    <div className="weather-container weather-background3">
      {cities.map(city => (
        <WeatherCard key={city} city={city} />
      ))}
    </div>
  );
};

export default CityCards;