import React from "react";
import styled from "styled-components";

import SearchFilter from "./components/SearchFilter";
import Weather from "./components/Weather";

const handleOnSearchChange = (searchData) => {
  console.log(searchData);
}

function App() {
  return (
    <Container>
      <SearchFilter onSearchChange={handleOnSearchChange} />
      <Weather />
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
