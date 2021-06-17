/* eslint-disable no-unused-vars */
// import { TrainOutlined } from '@material-ui/icons'
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

const songs = JSON.parse(localStorage.getItem('songs')) || []
const currentIndex = JSON.parse(localStorage.getItem('currentIndex')) || 0
const isRandom = JSON.parse(localStorage.getItem('isRandom')) || false

const initialState = {
    songs,
    currentIndex,
    isOpen: false,
    isRandom,
    isLoading: false,
    isPlaying: false,
    isPlayingNew: false,
}

const playMusicReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_RANDOM:
            if (!state.isRandom) {
                /**
                 * 1. clone array -> save into local storage
                 * 2. xóa currentSong ra khỏi clone array
                 * 3. shuffle clone array
                 * 4. cho currentSong vào đầu mảng
                 * 5. reset currentIndex thành 0
                 */
                const oldSongs = [...state.songs]
                localStorage.setItem('oldSongs', JSON.stringify(oldSongs))
                const currentSong = oldSongs.splice(state.currentIndex, 1)
                const newSongs = oldSongs.sort(() => Math.random() - 0.5)
                newSongs.unshift(currentSong[0])
                const currentIndex = 0

                return {
                    ...state,
                    isRandom: payload,
                    songs: newSongs,
                    currentIndex,
                }
            }
            /**
             * 1. get oldSongs from local storage
             * 2. get currentIndex based on array oldSongs
             * 3.
             */

            const oldSongs = JSON.parse(localStorage.getItem('oldSongs')) || []

            const currentSongId = state.songs[state.currentIndex].id

            let currentIndex = 0

            oldSongs.find((song, index) => {
                if (song.id === currentSongId) {
                    currentIndex = index
                    return true
                }

                return false
            })

            return {
                ...state,
                isRandom: payload,
                songs: oldSongs,
                currentIndex,
            }
        case TOGGLE_OPEN:
            return {
                ...state,
                isOpen: payload,
            }
        case TOGGLE_PLAY:
            return {
                ...state,
                isPlaying: payload,
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

        case SONG_CLICK:
            let index = 0
            let songs = state.songs
            let length = songs.length

            for (let i = 0; i < length; i++) {
                if (songs[i].id === payload) {
                    index = i
                    break
                }
            }

            return {
                ...state,
                currentIndex: index,
            }
        case CLICK_PLAY_SONGS:
            return {
                ...state,
                loading: true,
            }
        case CLICK_PLAY_SONGS_SUCCESS: {
            state.songs = payload.data
            return {
                ...state,
                isPlayingNew: !state.isPlayingNew,
                isPlaying: true,
            }
        }
        case CLICK_PLAY_SONGS_SUCCESS_PLAY: {
            console.log('log CLICK_PLAY_SONGS_SUCCESS_PLAY: ')
            return {
                ...state,
                isPlaying: true,
            }
        }
        default:
            return state
    }
}

export default playMusicReducer
