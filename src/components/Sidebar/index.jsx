import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import logo from '../../assets/img/logo.svg'
import logo1 from '../../assets/img/logo1.png'

Sidebar.propTypes = {}

function Sidebar() {
    return (
        <div className="sidenav">
            <Link className="logo" to="">
                <img src={logo} alt="" className="logo__img" />
                <img src={logo1} alt="" className="logo__img1" />
            </Link>
            <div className="container-sidenav">
                <NavLink className="sidenav-item" activeClassName="sidenav-item--active" exact to="/">
                    <i className="fal fa-home"></i>
                    <span>Trang chủ</span>
                </NavLink>

                <NavLink className="sidenav-item" exact to="/search" activeClassName="sidenav-item--active">
                    <i className="fal fa-search"></i>
                    <span>Tìm kiếm</span>
                </NavLink>

                <NavLink className="sidenav-item" activeClassName="sidenav-item--active" to="/library">
                    <i className="fal fa-stream"></i>
                    <span>Thư viện</span>
                </NavLink>
                <div className="sidenav-user-list">
                    <NavLink className="sidenav-item" activeClassName="sidenav-item--active" to="/playlist/new">
                        <i className="fal fa-plus-square"></i>
                        <span>Tạo playlist</span>
                    </NavLink>
                    <NavLink className="sidenav-item" activeClassName="sidenav-item--active" exact to="/album">
                        <i className="fal fa-heart"></i>
                        <span>Bài hát đã thích</span>
                    </NavLink>
                </div>
                {/* <NavLink className="sidenav-item" activeClassName="sidenav-item--active" exact to="/history">
                    <i className="fal fa-history"></i>
                    <span>Lịch sử</span>
                </NavLink>

                <NavLink className="sidenav-item" activeClassName="sidenav-item--active" exact to="/profile">
                    <i className="fal fa-user-alt"></i>
                    <span>Cá nhân</span>
                </NavLink> */}
            </div>
        </div>
    )
}

export default Sidebar
