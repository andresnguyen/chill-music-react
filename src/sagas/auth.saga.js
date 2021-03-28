/* eslint-disable no-unused-vars */
import { takeEvery, call, put } from 'redux-saga/effects'

import { SIGN_IN, SIGN_UP, signIn, signUp, signInSuccess } from '../actions/auth'
import userApi from '../api/userApi'

function* authWatcher() {
    yield takeEvery(SIGN_IN, signInSage)
}

function* signInSage(action) {
    console.log(action)
    try {
        const data = yield call(userApi.signIn, action.payload)

        const user = { _id: data.data._id, name: 'thuongnguyen.it78' }

        // // save data to local storage
        localStorage.setItem('token', data.data.token)
        localStorage.setItem('user', JSON.stringify(user))

        yield put(signInSuccess(user))
    } catch (error) {}
}

function* signUpSage(action) {
    console.log(action)
    try {
        const data = yield call(userApi.signUp, action.payload)
        console.log(data)

        yield put(signUp(data))
    } catch (error) {}
}

export default authWatcher
