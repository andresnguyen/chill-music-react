/* eslint-disable no-unused-vars */
import {
    CHANGE_CURRENT_INDEX,
    CHANGE_SONGS,
    SONG_CLICK,
    TOGGLE_OPEN,
    TOGGLE_PLAY,
    TOGGLE_RANDOM,
    CLICK_PLAY_SONGS,
    CLICK_PLAY_SONGS_SUCCESS,
    CLICK_PLAY_SONGS_SUCCESS_PLAY,
} from '../actions/playMusic'
import { takeEvery, call, put } from 'redux-saga/effects'

// import { GET_CURRENT_LIST, getCurrentListSuccess, getCurrentListFailed } from '../actions/playMusic'
import songApi from '../api/songApi'
import * as songApi2 from '../sevices/songApi'

// function* getCurrentListSaga() {
//     try {
//         const data = yield call(songApi.getCurrentList)
//         console.log(data)

//         yield put(getCurrentListSuccess(data))
//     } catch (error) {
//         yield put(getCurrentListFailed(error.message))
//     }
// }
function* getListPlayStream({ payload }) {
    try {
        const { response, error } = yield call(songApi2.getOneSong)
        const { data } = response
        console.log(data)
        yield put({
            type: CLICK_PLAY_SONGS_SUCCESS,
            payload: response.data,
        })
    } catch (error) {
        console.log('ERROR: ', error)
        // yield put({ type: GET_LIST_MIX_FAIL, error: error })
    }
}
function* playMusic() {
    // yield takeEvery(GET_CURRENT_LIST, getCurrentListSaga)
    yield takeEvery(CLICK_PLAY_SONGS, getListPlayStream)
}
export default playMusic
