import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../api";

const Forecast = ({ latitude, longitude, city }) => {
  return (
    <Container>
      <h2>Forecast</h2>
    </Container>
  );
};

const Container = styled.div`
`;

export default Forecast;