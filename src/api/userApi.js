import axiosClient from './axiosClient'

const userApi = {
    signIn: (data) => {
        const url = '/auth/login'
        return axiosClient.post(url, data)
    },

    signUp: (params) => {
        const url = '/auth/local/register'
        return axiosClient.post(url, { params })
    },
}

export default userApi
