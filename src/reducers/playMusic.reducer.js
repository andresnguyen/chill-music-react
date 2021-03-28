/* eslint-disable no-unused-vars */
import { CHANGE_CURRENT_INDEX, CHANGE_SONGS, TOGGLE_OPEN, TOGGLE_RANDOM } from '../actions/playMusic'

const songs = localStorage.getItem('songs') || []
const currentIndex = localStorage.getItem('currentIndex') || 0
const isRandom = localStorage.getItem('isRandom') || false

const initialState = {
    songs,
    currentIndex,
    isOpen: false,
    isRandom,
    isLoading: false,
}

const playMusicReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_RANDOM:
            return {
                ...state,
                isRandom: payload,
            }
        case TOGGLE_OPEN:
            return {
                ...state,
                isOpen: payload,
            }
        case CHANGE_CURRENT_INDEX:
            return {
                ...state,
                currentIndex: payload,
            }
        case CHANGE_SONGS:
            return {
                ...state,
                songs: payload,
            }
        default:
            return state
    }
}

export default playMusicReducer
