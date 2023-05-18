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
      <SearchContainer>
        <Search onCityInfoChange={handleCityInfoChange} />
      </SearchContainer>
      {latitude && longitude && (
        <InfoContainer>
          <Weather latitude={latitude} longitude={longitude} city={city} />
          <Forecast latitude={latitude} longitude={longitude} />
        </InfoContainer>
      )}
    </Container>
  );
}
// GEO API https://rapidapi.com/wirefreethought/api/geodb-cities
// Weather API https://home.openweathermap.org/api_keys

const Container = styled.div`
  margin: 20px auto;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
`;
const SearchContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 25px;
`;

export default App;
