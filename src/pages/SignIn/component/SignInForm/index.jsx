import React from 'react'
import './SignInForm.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import InputField from '../../../../common/form-controls/InputField'
import PasswordField from '../../../../common/form-controls/PasswordField'
import { Link } from 'react-router-dom'

SignInForm.propTypes = {}

function SignInForm(props) {
    const schema = yup.object().shape({
        email: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
        password: yup.string().required('Please enter your password'),
    })

    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    })

    const handleSubmit = async (values) => {
        const { onSubmit } = props
        if (onSubmit) {
            onSubmit(values)
        }
    }

    // const { isSubmitting } = form.formState

    return (
        <form className="signup-form" onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="email" label="Email" form={form} />
            <PasswordField name="password" label="Password" form={form} />

            <div class="form-group signup-term">
                Quên mật khẩu. Nhấn tại{' '}
                <Link href="#" class="signup-term-link">
                    đây.
                </Link>
            </div>
            <button type="submit" class="btn btn--gradient form-group">
                Đăng nhập
            </button>

            <button class="btn btn--facebook btn--social">
                <i class="fab fa-facebook-f"></i>

                <span>Đăng nhập với Facebook</span>
            </button>

            <button class="btn btn--google btn--social">
                <i class="fab fa-google"></i>
                <span>Đăng nhập với Google</span>
            </button>
        </form>
    )
}

export default SignInForm
