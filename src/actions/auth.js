export const SIGN_IN = 'SIGN_IN'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'

export const signIn = (payload) => ({
    type: SIGN_IN,
    payload,
})

export const signInSuccess = (payload) => ({
    type: SIGN_IN_SUCCESS,
    payload,
})

export const signUp = (payload) => ({
    type: SIGN_UP,
    payload,
})

export const signUpSucess = (payload) => ({
    type: SIGN_UP_SUCCESS,
    payload,
})
