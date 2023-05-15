import React from "react";
import styled from "styled-components";

const Weather = () => {
    return (
        <Container>
            <InnerContainer>
                <CityText>City Placeholder</CityText>
                <WeatherText>Weather Placeholder</WeatherText>
                <WeatherImage src=""/>
            </InnerContainer>
        </Container>
    );
}

const Container = styled.div`
display: flex;
justify-content: center;

`;
const InnerContainer = styled.div`
background-color: brown;
padding-inline: 50px;
margin-top: 25px;
`;
const CityText = styled.h1`
margin-bottom: 50px;
text-align: center;
`
const WeatherText = styled.p``
const WeatherImage = styled.img``

export default Weather;