import React, { lazy } from 'react'
import SecurityLayout from '../layouts/SecurityLayout'
import BlankLayout from '../layouts/BlankLayout'

const SignIn = lazy(() => import('../pages/SignIn'))
const Home = lazy(() => import('../pages/Home'))
const Search = lazy(() => import('../pages/Search'))
const Library = lazy(() => import('../pages/Library'))
const History = lazy(() => import('../pages/History'))
const SeeAll = lazy(() => import('../pages/SeeAll'))
const UserPlaylist = lazy(() => import('../pages/UserPlaylist'))
const Artist = lazy(() => import('../pages/Artist'))

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
        path: '/search',
        exact: true,
        auth: false,
        layout: SecurityLayout,
        title: 'Tìm kiếm',
        main: (props) => <Search router={props} />,
    },
    {
        path: '/library',
        exact: true,
        auth: false,
        layout: SecurityLayout,
        title: 'Thư viện',
        main: (props) => <Library router={props} />,
    },
    {
        path: '/artist',
        exact: true,
        auth: false,
        layout: SecurityLayout,
        title: 'Nghệ sĩ',
        main: (props) => <Artist router={props} />,
    },
    {
        path: '/collection',
        exact: true,
        auth: false,
        layout: SecurityLayout,
        title: 'Xem tất cả',
        main: (props) => <SeeAll router={props} />,
    },
    {
        path: '/playlist',
        exact: true,
        auth: false,
        layout: SecurityLayout,
        title: 'Danh sách nhạc',
        main: (props) => <UserPlaylist router={props} />,
    },
    {
        path: '/history',
        exact: true,
        auth: false,
        layout: SecurityLayout,
        title: 'Lịch sử',
        main: (props) => <History router={props} />,
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
