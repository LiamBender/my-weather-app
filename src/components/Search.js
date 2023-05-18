import React, { useState } from 'react';
import { GEO_API_URL, geoApi } from '../api';

const Search = ({ onCityInfoChange }) => {
  const [city, setCity] = useState('');

  const getCityInfo = async () => {
    try {
      const response = await fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${city}`, geoApi);
      const data = await response.json();
      if (data.data.length > 0) {
        const { latitude, longitude, city } = data.data[0];
        onCityInfoChange(latitude, longitude, city);
      } else {
        onCityInfoChange('', '', '');
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
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search for a city" type="text" value={city} onChange={handleInputChange} />
        <button type="submit">Get City Info</button>
      </form>
    </div>
  );
};

export default Search;
