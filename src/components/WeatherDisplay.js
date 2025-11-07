import React from "react";
import './../styles/App.css';

const WeatherDisplay = ({ weather }) => {
  // Conditional styling
  const tempStyle = {
    color: weather.temperature > 20 ? "red" : "blue",
  };

  return (
    <div>
      <p style={tempStyle}>Temperature: {weather.temperature}°C</p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
