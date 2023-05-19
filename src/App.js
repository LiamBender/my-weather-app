import React, { useState } from "react";
import styled from "styled-components";

import Search from "./components/Search";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
import video from "./assets/video.mp4";

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
    <MainContainer>
      <Overlay />
        <VideoBackground src={video} autoPlay loop muted />
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
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: black;
`
const VideoBackground = styled.video`
  height: 100%;
  width: 100%;
  float: left;
  top: 0;
  left: 0;
  padding: none;
  position: fixed;
  object-fit: cover;
`;

const Container = styled.div`
  padding-bottom: 30px;
  margin-top: 10vh;
  margin-inline: 20vh;
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.29);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.8px);
  -webkit-backdrop-filter: blur(6.8px);

  @media screen and (max-width: 1980px) {
  padding-inline: 10px;
  margin-inline: 20vh;
}
@media screen and (max-width: 1260px) {
  margin-inline: 10vh;
}
@media screen and (max-width: 990px) {
  margin-inline: 0vh;
}
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  @media screen and (max-width: 1372px) {
    display: block;
}
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export default App;
