import React from 'react'
import './SignInForm.scss'

SignInForm.propTypes = {}

function SignInForm(props) {
    const handleSubmit = async (values) => {
        const { onSubmit } = props
        if (onSubmit) {
            onSubmit(values)
        }
    }

    return (
        <form className="signup-form" autocomplete="off" onSubmit={handleSubmit}>
            <div className="form-group input-focus-effect">
                <input type="email" id="email" className="form-input" required name="email" />
                <label for="email" className="form-label">
                    Email
                </label>
            </div>

            <div className="form-group input-focus-effect">
                <input type="password" id="password" className="form-input" required name="password" />
                <label for="password" className="form-label">
                    Password
                </label>
            </div>

            <div className="signup-term">
                Quên mật khẩu. Nhấn tại{' '}
                <a href="/auth/login" alt="something" className="signup-term-link">
                    đây.
                </a>
            </div>
            <button type="submit" className="btn btn--gradient">
                Đăng nhập
            </button>

            <button className="btn btn--facebook btn--social">
                <i className="fab fa-facebook-f"></i>

                <span>Đăng nhập với Facebook</span>
            </button>

            <button className="btn btn--google btn--social">
                <i className="fab fa-google"></i>
                <span>Đăng nhập với Google</span>
            </button>
        </form>
    )
}

export default SignInForm
