import { all } from 'redux-saga/effects'
import authWatcher from './auth.saga'
import getCurrentListWatcher from './playMusic.saga'

export default function* rootSaga() {
    yield all([getCurrentListWatcher(), authWatcher()])
}
