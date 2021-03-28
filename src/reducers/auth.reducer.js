import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_UP } from '../actions/auth'

const initialState = {
    isLoading: false,
    current: JSON.parse(localStorage.getItem('USER')) || {},
    settings: {},
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGN_IN:
            return {
                ...state,
                isLoading: true,
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                current: payload,
            }
        case SIGN_UP:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default authReducer
