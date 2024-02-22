import React, { useState } from 'react';
import '../style/SearchBar.css';

const SearchBar = () => {

    const [query, setQuery] = useState("")

    let search = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
    }

    return (
        <div className="searchbar-container">
            <input
                type="text"
                className="searchbar-form"
                placeholder="Search movies..."
                onChange={search}
                value={query}
            />
            <button className="searchbar-button">🔍</button>
        </div>
    );
};

export default SearchBar;