import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.scss'
Sidebar.propTypes = {}

function Sidebar() {
    return (
        <div className="sidenav">
            <div className="logo">CHILL MUSIC</div>
            <NavLink className="sidenav-item" activeClassName="sidenav-item--active" exact to="/">
                <i className="fal fa-home"></i>
                <span>Trang chủ</span>
            </NavLink>

            <NavLink className="sidenav-item" exact to="/search" activeClassName="sidenav-item--active">
                <i className="fal fa-search"></i>
                <span>Tìm kiếm</span>
            </NavLink>

            <NavLink className="sidenav-item" activeClassName="sidenav-item--active" exact to="/library">
                <i className="fal fa-stream"></i>
                <span>Thư viện</span>
            </NavLink>

            <NavLink className="sidenav-item" activeClassName="sidenav-item--active" exact to="/history">
                <i className="fal fa-history"></i>
                <span>Lịch sử</span>
            </NavLink>

            <NavLink className="sidenav-item" activeClassName="sidenav-item--active" exact to="/profile">
                <i className="fal fa-user-alt"></i>
                <span>Cá nhân</span>
            </NavLink>
        </div>
    )
}

export default Sidebar
