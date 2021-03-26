import { combineReducers } from 'redux'
import playMusicReducer from './playMusic.reducer'
import playerQueueReducer from './playerQueue.reducer'
const reducer = combineReducers({ playMusicReducer, playerQueue: playerQueueReducer })
export default reducer
