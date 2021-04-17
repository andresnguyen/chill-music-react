import classnames from 'classnames'
import React, { useState } from 'react'
import './SearchInput.scss'
SearchInput.propTypes = {}

function SearchInput() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleOnFocus = () => {
        setToggleMenu(true)
    }

    const handleOnBlur = () => {
        setToggleMenu(false)
    }
    return (
        <div className="search-auto">
            <div className="search-form">
                <input
                    type="text"
                    className="search-auto-input"
                    placeholder="Nhập tên bài hát, nghệ sĩ hoặc album"
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                />
                <i className="fal fa-search search-form__icon"></i>
            </div>
            <div className={classnames('search-auto-list', { 'search-auto-list__show': toggleMenu })}>
                <div className="search-auto-item">About</div>
                <div className="search-auto-item">Home</div>
                <div className="search-auto-item">Contact</div>
            </div>
        </div>
    )
}

export default SearchInput
