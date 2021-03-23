import React, { lazy } from 'react'
import SecurityLayout from '../layouts/SecurityLayout'

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
]

export default route
