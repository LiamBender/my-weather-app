import React, { useState } from "react";
import styled from "styled-components";
import { GEO_API_URL, geoApi } from "../api";

const Search = ({ onCityInfoChange }) => {
  const [city, setCity] = useState("");

  const getCityInfo = async () => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${city}`,
        geoApi
      );
      const data = await response.json();
      if (data.data.length > 0) {
        const { latitude, longitude, city } = data.data[0];
        onCityInfoChange(latitude, longitude, city);
      } else {
        onCityInfoChange("", "", "");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getCityInfo();
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit}>
        <InnerContainer>
          <SearchField
            placeholder="Search for a city"
            type="text"
            value={city}
            onChange={handleInputChange}
          />
        </InnerContainer>
        <InnerContainer>
          <SearchButton type="submit">Get City Info</SearchButton>
        </InnerContainer>
      </SearchForm>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 10px;
  padding: 15px;
  margin: 25px;

`;
const InnerContainer = styled.div`
  text-align: center;
`;
const SearchForm = styled.form``;
const SearchField = styled.input`
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
  outline: none;
  background-color: white;
`;
const SearchButton = styled.button`
  border-radius: 10px;
  padding: 5px;
  background-color: white;
  outline: none;
  background-color: white;
  &:hover {
 background-color: lightgray;
}
`;
export default Search;
