/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import './Profile.scss'
import ProfileHeader from './components/ProfileHeader'
import ProfileInfoForm from './components/ProfileInfoForm'

Profile.propTypes = {}

function Profile(props) {
    return (
        <div className="profile">
            <ProfileHeader />
            <div className="profile-form-wrapper">
                <h2 className="profile-title">Thông tin cá nhân</h2>
                <ProfileInfoForm />
            </div>
        </div>
    )
}

export default Profile
