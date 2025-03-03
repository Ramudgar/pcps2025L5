import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = "9cc6c4755d4547f8ad445520250303"; // Replace with your API Key

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}
  `
        );
        console.log(response.data);
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeather(null);
      }
    };

  // useEffect(() => {
  //   fetchWeather= async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  //     );
  //     console.log(response);
  //     setWeather(response.data);
  //   } catch (error) {
  //     console.error("Error fetching weather data:", error);
  //     setWeather(null);
  //   }
  // }}, [city]);

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">Weather App 🌦️</h2>
      <input
        type="text"
        className="p-2 border rounded-md"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={fetchWeather}
        className="ml-2 p-2 bg-blue-500 text-blue-900 rounded-lg"
      >
        Get Weather
      </button>

      {weather && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">
            {weather.location.name}, {weather.location.country}
          </h3>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Weather: {weather.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
