import React from 'react'
import './SearchInput.scss'
SearchInput.propTypes = {}

function SearchInput() {
    return (
        <div className="search-input-wrapper">
            <div className="search__container">
                <input className="search__input" type="text" placeholder="Search" />
            </div>
        </div>
    )
}

export default SearchInput