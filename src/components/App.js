import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny",
  });
  const tempStyle = {
    color: weather.temperature > 20 ? "red" : "blue",
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <p>
        Temperature: <span style={tempStyle}>{weather.temperature}°C</span>
      </p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
}

export default App;
