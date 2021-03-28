import React, { lazy } from 'react'
import SecurityLayout from '../layouts/SecurityLayout'
import BlankLayout from '../layouts/BlankLayout'

import SignIn from '../pages/SignIn'

const Home = lazy(() => import('../pages/Home'))

const route = [
    {
        path: '/',
        exact: true,
        auth: false,
        layout: SecurityLayout,
        title: 'Trang Chủ',
        main: (props) => <Home router={props} />,
    },

    {
        path: '/auth/login',
        exact: true,
        auth: false,
        layout: BlankLayout,
        title: 'Đăng Nhập',
        main: (props) => <SignIn router={props} />,
    },
]

export default route
