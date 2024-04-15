import React, { useState, useEffect } from 'react';
import WeatherIcons from './WeatherIcons';

const CurrCard = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error('Permissions not accepted', error);
      }
    );
  }, []);

  const fetchWeatherByCoords = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=dbe55cc00ca52d77f52a8debaf07c800&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="weather-container weather-background1">
      <div>
      {weatherData && (
        <div className="weather-info-currcard">
          <h3 className='currcard-button'>Weather where you are</h3>
          {WeatherIcons(weatherData.weather[0].icon)}
          <p className="weather-text">Temperature: <span className="weather-value">{weatherData.main.temp}°C</span></p>
          <p className="weather-text">Humidity: <span className="weather-value">{weatherData.main.humidity}%</span></p>
          <p className="weather-text">Description: <span className="weather-value">{weatherData.weather[0].description}</span></p>
          <p className="weather-text">Wind Speed: <span className="weather-value">{weatherData.wind.speed} m/s</span></p>
        </div>
      )}
      </div>
    </div>
  );
};


export default CurrCard;



