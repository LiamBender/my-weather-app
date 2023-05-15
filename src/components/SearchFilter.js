import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { GEO_API_URL, geoApi } from "../api";

const SearchFilter = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, geoApi)
      .then((response) => response.json())
      .then((response) => {
        return {
            options: response.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                };
            }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearchValue(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={searchValue}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default SearchFilter;
