import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const SearchFilter = ({onSearchChange}) => {

    const [searchValue, setSearchValue] = useState(null);

    const handleOnChange = (searchData) => {
        setSearchValue(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
           placeholder="Search for city"
           debounceTimeout={600}
           value={searchValue}
           onChange={handleOnChange}
        />
    )
}

export default SearchFilter;