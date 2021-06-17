import axios from 'axios'

export function configAxios() {
    // axios.defaults.baseURL = `${process.env.REACT_APP_DOMAIN}/api`
    axios.defaults.baseURL = 'https://demo7080721.mockable.io/'
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    axios.defaults.headers.post['Content-Type'] = 'application/json'
}

export function configToken(token) {
    if (token) {
        axios.defaults.headers.common.Authorization = `Token ${token}`
    } else {
        delete axios.defaults.headers.common.Authorization
    }
}
