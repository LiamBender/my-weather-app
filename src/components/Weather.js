import React from "react";
import styled from "styled-components";

const Weather = () => {
    return (
        <Container>
            <InnerContainer>
                <CityText>City Placeholder</CityText>
                <WeatherContainer>
                <WeatherText>Weather Placeholder</WeatherText>
                <TemperatureText> Temperature Placeholder</TemperatureText>
                </WeatherContainer>
                <DetailsContainer>
                </DetailsContainer>
                <WeatherImage src=""/>
            </InnerContainer>
        </Container>
    );
}

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
const WeatherText = styled.p`
text-align: left;
margin: 0;
`
const TemperatureText = styled.p`
margin: 0;
`
const WeatherImage = styled.img`
`

export default Weather;