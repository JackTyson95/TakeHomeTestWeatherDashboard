import React, { useState } from 'react';
import WeatherIcons from './WeatherIcons'

const Search = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [buttonClicked, setButtonClicked ] = useState(false);

  const handleGetWeatherClick = async () => {
    setButtonClicked(true);
    if (!cityName.trim()) {
      alert('Please enter a location');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/weather?city=${cityName}`);
      if (!response.ok) {
        throw new Error('Location not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setButtonClicked(false);
    }
  };

return (
  <div className="weather-container weather-background2">
    <div className="weather-box">
      <input
        className='input'
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter a location "
        autoComplete="on"
      />
      {!buttonClicked && (
        <button
          type="button"
          onClick={handleGetWeatherClick}
          className="forecast-button"
        >
          Click to get your forecast
        </button>
      )}
      {weatherData && (
        <div className="weather-info">
          <div className='weather-icons'>
            {weatherData.weather[0].icon && WeatherIcons(weatherData.weather[0].icon)}
          </div>
          <p className="temperature">Temperature: {weatherData.main.temp} °C</p>
          <p className="humidity">Humidity: {weatherData.main.humidity} %</p>
          <p className="weatherDescription">Description: {weatherData.weather[0].description}</p>
          <p className="windSpeed">Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  </div>
);
};

export default Search;
          


