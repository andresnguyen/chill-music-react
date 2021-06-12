/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import './ProfileHeader.scss'
import { Link } from 'react-router-dom'

Profile.propTypes = {}

function Profile(props) {
    return (
        <div className="profile__header">
            <div className="profile__avatar">
                <img
                    src="https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.6435-1/p320x320/77134786_484221258968222_9009673761493876736_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_ohc=IYIFpxVN2DMAX8z_PtI&tn=fDfxqkhA0x8JtPp6&_nc_ht=scontent.fpnh22-3.fna&tp=6&oh=1b3025f54f75db5e186db9b88bf6d342&oe=60C873C9"
                    alt="avatar"
                />
            </div>
            <div className="profile__information">
                <span className="profile__label">PROFILE</span>
                <h1 className="profile__name">Thường Nguyễn</h1>
                <Link className="profile__following" to="">
                    4 Following
                </Link>
            </div>
        </div>
    )
}

export default Profile
