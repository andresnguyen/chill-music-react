import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'
Header.propTypes = {
    
};

function Header(props) {
    return (
        <div className="header-wrapper">
            <header className = "header">
                <NavLink className="header__item"
                activeClassName = "header__item--active"
                to = "/"
                >
                    <i className="fal fa-home"></i>
                    <span>Trang chủ</span>
                </NavLink>
    
                <NavLink className="header__item"
                to = "/search"
                >
                    <i className="fal fa-search"></i>
                    <span>Tìm kiếm</span>
                </NavLink>
    
                <NavLink className="header__item"
                to = "/library"
                >
                    <i className="fal fa-stream"></i>
                    <span>Thư viện</span>
                </NavLink>
    
                <NavLink className="header__item"
                to = "/history"
                >
                    <i className="fal fa-history"></i>
                    <span>Lịch sử</span>
                </NavLink>
    
                <NavLink className="header__item"
                to = "/profile"
                >
                    <i className="fal fa-user-alt"></i>
                    <span>Cá nhân</span>
                </NavLink>
            </header>
        </div>
    );
}

export default Header;