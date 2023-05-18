import React, { useState } from "react";
import styled from "styled-components";

import Search from "./components/Search";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [city, setCity] = useState("");

  const handleCityInfoChange = (latitude, longitude, city) => {
    setLatitude(latitude);
    setLongitude(longitude);
    setCity(city);
  };

  return (
    <Container>
      <Search onCityInfoChange={handleCityInfoChange} />
        {latitude && longitude && (
        <Weather latitude={latitude} longitude={longitude} city={city} />
      )}
      {latitude && longitude && (
        <Forecast latitude={latitude} longitude={longitude} city={city} />
      )}
    </Container>
  );
}
// GEO API https://rapidapi.com/wirefreethought/api/geodb-cities
// Weather API https://home.openweathermap.org/api_keys

const Container = styled.div`
  max-width: 1080px;
  margin: 20px auto;
`;

export default App;
