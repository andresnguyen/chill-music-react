import React from 'react'
import './Search.scss'
Search.propTypes = {}

function Search() {
    return (
        <div className="search-wrapper">
            <div className="search__container">
                <input className="search__input" type="text" placeholder="Search" />
            </div>
        </div>
    )
}

export default Search
