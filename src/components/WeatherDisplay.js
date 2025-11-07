import React from "react";
import './../styles/App.css';

const WeatherDisplay = ({ weather }) => {
  // Conditional styling for temperature
  const tempStyle = {
    color: weather.temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      <p>
        Temperature: <span style={tempStyle}>{weather.temperature}°C</span>
      </p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
