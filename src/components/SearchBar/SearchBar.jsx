import React, { useState } from "react";
import styles from "./SearchBar.module.css"

// Static object (later it will become dynamic)
const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

const SearchBar = ({ searchYelp }) => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    // Function to activate or desactivate the .active class when a sortByOption is clicked
    const getSortByClass = (sortByOption) => {
        return sortBy === sortByOption ? styles.active : '';
    }

    // Update sortBy state with the selected sort
    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
        // Re-query Yelp API with the new sorting option
        searchYelp(term, location, sortByOption)
    }

    // Update term (business) state with the input's value
    const handleTermChange = (event) => {
        setTerm(event.target.value);
    }

    // Update location state with the input's value
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    // preventDefault() en el controlador de eventos de envío de formulario, se evita que la página se recargue y permite que el código personalizado maneje la lógica de búsqueda y actualización de la aplicación.
    const handleSearch = (event) => {
        event.preventDefault();
        searchYelp(term, location, sortBy);
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleSearch(event);
        }
    }

    const renderSortByOptions = () => {
        // Use Object.keys() to convert the sortByOptions keys values to an array.
        // Save the value of each key on a variable and returned as the key of each three <li>.
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionsValue = sortByOptions[sortByOption];
            return <li
                key={sortByOptionsValue}
                className={getSortByClass(sortByOptionsValue)}
                onClick={() => handleSortByChange(sortByOptionsValue)}
            >{sortByOption}
            </li>
        });
    }

    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSortOptions}>
                <ul>{renderSortByOptions()}</ul>
            </div>
            <form onSubmit={handleSearch}>
                <div className={styles.SearchBarFields}>
                    <input
                        placeholder="Search Business"
                        onChange={handleTermChange}
                        value={term}
                    />
                    <input
                        placeholder="Where?"
                        onChange={handleLocationChange}
                        onKeyDown={handleKeyDown}
                        value={location}
                    />
                </div>
                <div className={styles.SearchBarSubmit}>
                    <button type="submit">Let's Go</button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;