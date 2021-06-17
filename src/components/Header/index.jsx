import React from 'react'
import './Header.scss'
import { useRouteMatch } from 'react-router'
import SearchInput from '../SearchInput'
import { Link } from 'react-router-dom'
import LibraryHeader from '../LibraryHeader'
Header.propTypes = {}

function Header() {
    const match = useRouteMatch()
    const activeSearch = match.path === '/search' || false
    const stringpath = match.path
    const activeLib = stringpath.startsWith('/library')

    return (
        <>
            <header className="header-container">
                <div>
                    <article id="search-header">
                        <span className="name">{activeSearch ? <SearchInput /> : ''}</span>
                        <span className="name">{activeLib ? <LibraryHeader /> : ''}</span>
                    </article>

                    <article id="reference">
                        <Link to="/user" className="btn-signup">
                            Đăng ký
                        </Link>
                        <Link to="" className="btn-login">
                            Đăng nhập
                        </Link>
                    </article>
                </div>
            </header>
        </>
    )
}

export default Header
