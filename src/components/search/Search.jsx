import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";


const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return(
            fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
                .then(response => response.json())
                .then(response => {
                    // [react-select-async-paginate] response of "loadOptions" should be an object with "options" prop, which contains array of options.
                    return {
                        options: response.data.map((city)=> {
                            return {
                                value: `${city.latitude} ${city.longitude}`,
                                label: `${city.name}, ${city.countryCode}`,
                            }
                        })
                    }
                })
                .catch(err => console.error(err))
        );
    };

    const handleOnChange = (searchData) => {
        // When selecting an input City, it sets the new search and executes the function recieved from parameter.
        // As the search state is changed, the component reloads with new data (updates input value with the searched city in the search state).
        setSearch(searchData);
        onSearchChange(searchData);
    }
    
    return(
        // Component from 'react-select-async-paginate' package. 
        // 'loadOptions is a function that loads the possible selections into the combobox while the searchbar is being updated.'
        <AsyncPaginate
            placeholder= "Search for city"
            debounceTimeout= {600}  // The amount of time you want the debounce function to wait after the last received.
            value= {search}
            onChange= {handleOnChange}  // OnSelection
            loadOptions= {loadOptions}  // Its executed, lets say, onKeyPress.
        />
    );
}

export default Search;