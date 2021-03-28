import { combineReducers } from 'redux'
import playMusicReducer from './playMusic.reducer'
import authReducer from './auth.reducer'

const reducer = combineReducers({ playMusicReducer, authReducer })
export default reducer
