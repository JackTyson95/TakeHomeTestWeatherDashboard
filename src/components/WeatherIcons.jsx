import React from 'react';

const WeatherIcons = (iconId) => {
  return (
    <img
      src={`http://openweathermap.org/img/w/${iconId}.png`}
      alt="Weather Icon"
      className="weather-icon"
    />
  );
};

export default WeatherIcons;