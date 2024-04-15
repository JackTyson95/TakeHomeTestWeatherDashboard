import React, { useState, useEffect } from 'react';
import WeatherIcons from './WeatherIcons';

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dbe55cc00ca52d77f52a8debaf07c800&units=metric`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Please enter a valid destination', error);
      }
    };
    fetchData();
  }, [city]);

  return (
    <>
      {weatherData && (
        <div className="weather-info">
          <h3 className='citycards-button'>{city}</h3>
          {WeatherIcons(weatherData.weather[0].icon)}
          <p className="weather-text">
            Temperature: <span className="weather-value">{weatherData.main.temp} °C</span>
          </p>
          <p className="weather-text">
            Humidity: <span className="weather-value">{weatherData.main.humidity} %</span>
          </p>
          <p className="weather-text">
            Wind Speed: <span className="weather-value">{weatherData.wind.speed} m/s</span>
          </p>
        </div>
         )}
         </>
       );
     };
     
     export default WeatherCard;




