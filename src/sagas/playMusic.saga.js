/* eslint-disable no-unused-vars */
import { takeEvery, call, put } from 'redux-saga/effects'

// import { GET_CURRENT_LIST, getCurrentListSuccess, getCurrentListFailed } from '../actions/playMusic'
import songApi from '../api/songApi'

function* getCurrentListWatcher() {
    // yield takeEvery(GET_CURRENT_LIST, getCurrentListSaga)
}

// function* getCurrentListSaga() {
//     try {
//         const data = yield call(songApi.getCurrentList)
//         console.log(data)

//         yield put(getCurrentListSuccess(data))
//     } catch (error) {
//         yield put(getCurrentListFailed(error.message))
//     }
// }

export default getCurrentListWatcher
