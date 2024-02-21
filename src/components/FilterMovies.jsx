import React from 'react';
import '../style/FilterMovies.css'

const FilterMovies = ( {isOpen, filterDisplayChange} ) => {

  return (
    <div className={`filter-container ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <div className="filter-options">

            <div className='show-status-form'>
                <label>Movie Status:</label>
                <select>
                    <option>Now Showing</option>
                    <option>Coming Soon</option>
                </select>
            </div>

            <div className='genre-select-form'>
                <label>Movie Genre:</label>
                <select>
                    <option>Action</option>
                    <option>Romance</option>
                    <option>Comedy</option>
                    <option>Horror</option>
                    <option>Drama</option>
                </select>
            </div>

          <button className='save-filter-button' onClick={filterDisplayChange}>Save</button>
        </div>
      )}
    </div>
  );
};

export default FilterMovies;
