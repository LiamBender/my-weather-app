import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ latitude, longitude }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const getForecastData = async () => {
      try {
        const response = await fetch(
          `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const data = await response.json();
        setForecastData(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (latitude && longitude) {
      getForecastData();
    }
  }, [latitude, longitude]);

  return (
    <Container>
      <ForecastHeader>Weather Forecast</ForecastHeader>
      {forecastData ? (
        <InnerContainer>
          {forecastData.list.splice(0, 7).map((item, idx) => (
            <ForecastContainer key={item.dt}>
              <DaysHeader>{forecastDays[idx]}</DaysHeader>
              <WeatherInfo>
                Weather: {item.weather[0].description}
              </WeatherInfo>
              <WeatherInfo>Temperature: {item.main.temp}</WeatherInfo>
              <WeatherInfo>
                Feels like: {Math.round(item.main.feels_like)}°C
              </WeatherInfo>
              <WeatherInfo>Wind: {item.wind.speed} m/s</WeatherInfo>
              <WeatherInfo>Humidity: {item.main.humidity}%</WeatherInfo>
              <WeatherInfo>Pressure: {item.main.pressure} hPa</WeatherInfo>
              <WeatherInfo>
                Temperature Max: {Math.round(item.main.temp_max)}°C
              </WeatherInfo>
              <WeatherInfo>
                Temperature Min: {Math.round(item.main.temp_min)}°C
              </WeatherInfo>
            </ForecastContainer>
          ))}
        </InnerContainer>
      ) : (
        <p>No forecast data available</p>
      )}
    </Container>
  );
};

const Container = styled.div`
  border-radius: 10px;
  background-color: gray;
  padding-inline: 15px;
  margin-left: 10px;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ForecastContainer = styled.div`
  margin-inline: 5px;
`;
const ForecastHeader = styled.h2``;
const DaysHeader = styled.h3``;
const WeatherInfo = styled.p``;

export default Forecast;
