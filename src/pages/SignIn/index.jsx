/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../../actions/auth'
import SignInForm from './component/SignInForm'
import './SignIn.scss'

SignIn.propTypes = {}

const handleSubmit = async (values) => {
    try {
        console.log(values)
    } catch (error) {}
}

function SignIn() {
    return (
        <div className="blank-wrapper">
            <div className="signup">
                <img
                    src="https://cdn.dribbble.com/users/47000/screenshots/14536475/media/4448b07811608dff11183f4ea6cb5d95.png"
                    alt=""
                    class="signup-image"
                />
                <div className="signup-container">
                    <h1 class="signup-heading">Đăng nhập</h1>
                    <SignInForm onSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default SignIn
