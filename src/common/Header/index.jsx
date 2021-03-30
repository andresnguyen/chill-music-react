import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
Header.propTypes = {}

function Header() {
    return (
        <div className="header-wrapper">
            <header className="header">
                <NavLink className="header__item" activeClassName="header__item--active" exact to="/">
                    <i className="fal fa-home"></i>
                    <span>Trang chủ</span>
                </NavLink>

                <NavLink className="header__item" exact to="/search" activeClassName="header__item--active">
                    <i className="fal fa-search"></i>
                    <span>Tìm kiếm</span>
                </NavLink>

                <NavLink className="header__item" activeClassName="header__item--active" exact to="/library">
                    <i className="fal fa-stream"></i>
                    <span>Thư viện</span>
                </NavLink>

                <NavLink className="header__item" activeClassName="header__item--active" exact to="/history">
                    <i className="fal fa-history"></i>
                    <span>Lịch sử</span>
                </NavLink>

                <NavLink className="header__item" activeClassName="header__item--active" exact to="/profile">
                    <i className="fal fa-user-alt"></i>
                    <span>Cá nhân</span>
                </NavLink>
            </header>
        </div>
    )
}

export default Header
