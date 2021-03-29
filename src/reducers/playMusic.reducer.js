/* eslint-disable no-unused-vars */
import { CHANGE_CURRENT_INDEX, CHANGE_SONGS, TOGGLE_OPEN, TOGGLE_PLAY, TOGGLE_RANDOM } from '../actions/playMusic'

const songs = JSON.parse(localStorage.getItem('songs') || [])
const currentIndex = JSON.parse(localStorage.getItem('currentIndex') || 0)
const isRandom = JSON.parse(localStorage.getItem('isRandom') || false)

const initialState = {
    songs,
    currentIndex,
    isOpen: false,
    isRandom,
    isLoading: false,
    isPlaying: false,
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

                console.log(newSongs)

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

            const oldSongs = JSON.parse(localStorage.getItem('oldSongs') || [])

            console.log(oldSongs)

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
        default:
            return state
    }
}

export default playMusicReducer
