import { all } from 'redux-saga/effects'
import getCurrentListWatcher from './playMusic.saga'

export default function* rootSaga() {
    yield all([getCurrentListWatcher()])
}
