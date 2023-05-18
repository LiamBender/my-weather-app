import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";

const Weather = ({ latitude, longitude, city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await fetch(
          `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (latitude && longitude) {
      getWeatherData();
    }
  }, [latitude, longitude]);

  return (
    <Container>
      {weatherData ? (
        <InnerContainer>
          <CityText>{city},  {weatherData.sys.country}</CityText>
          <WeatherContainer>
            <WeatherInfo>Weather: {weatherData.weather[0].description}</WeatherInfo>
            <WeatherInfo>Temperature: {Math.round(weatherData.main.temp)}°C</WeatherInfo>
          </WeatherContainer>
          <DetailsContainer>
          <WeatherInfo>Feels like: {Math.round(weatherData.main.feels_like)}°C</WeatherInfo>
          <WeatherInfo>Wind: {weatherData.wind.speed} m/s</WeatherInfo>
          <WeatherInfo>Humidity: {weatherData.main.humidity}%</WeatherInfo>
          <WeatherInfo>Pressure: {weatherData.main.pressure} hPa</WeatherInfo>
          <WeatherInfo>Temperature Max: {Math.round(weatherData.main.temp_max)}°C</WeatherInfo> <WeatherInfo>Temperature Min: {Math.round(weatherData.main.temp_min)}°C</WeatherInfo>
          </DetailsContainer>
          <WeatherImage src="" />
        </InnerContainer>
      ) : (
        <p>No weather data available</p>
      )}
    </Container>
  );
};

const Container = styled.div`
`;
const InnerContainer = styled.div`
border-radius: 10px;
background-color: gray;
`;
const WeatherContainer = styled.div`
display: flex;
flex-direction: column;
`
const DetailsContainer = styled.div``
const CityText = styled.h2`
font-weight: bold;
text-align: center;
`
const WeatherInfo = styled.p`
text-align: left;
margin: 0;
`
const WeatherImage = styled.img``

export default Weather;
