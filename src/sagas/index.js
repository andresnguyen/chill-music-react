import { all } from 'redux-saga/effects'
import authWatcher from './auth.saga'
import playMusic from './playMusic.saga'
import { configAxios } from '../api/configAxios'
export default function* rootSaga() {
    configAxios()
    yield all([playMusic(), authWatcher()])
}
