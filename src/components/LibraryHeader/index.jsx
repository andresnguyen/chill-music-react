import React from 'react'
import './LibraryHeader.scss'
// import { useRouteMatch } from 'react-router'
// import SearchInput from '../SearchInput'
import { NavLink } from 'react-router-dom'
LibraryHeader.propTypes = {}

function LibraryHeader() {
    return (
        <div className="library-header-wrapper">
            <div className="library-header-tab">
                <NavLink
                    to="/library"
                    exact
                    className="library-header-tab-link"
                    activeClassName="library-header-tab_selected"
                >
                    Playlist
                </NavLink>
            </div>
            <div className="library-header-tab">
                <NavLink
                    exact
                    to="/library/artists"
                    className="library-header-tab-link"
                    activeClassName="library-header-tab_selected"
                >
                    Nghệ sỹ
                </NavLink>
            </div>
            <div className="library-header-tab">
                <NavLink
                    exact
                    to="/library/albums"
                    className="library-header-tab-link"
                    activeClassName="library-header-tab_selected"
                >
                    Album
                </NavLink>
            </div>
        </div>
    )
}

export default LibraryHeader
