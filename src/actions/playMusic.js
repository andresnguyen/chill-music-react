// export const GET_CURRENT_LIST = 'GET_CURRENT_LIST'
// export const GET_CURRENT_LIST_FAILED = 'GET_CURRENT_LIST_FAILED'
// export const GET_CURRENT_LIST_SUCCESS = 'GET_CURRENT_LIST_SUCCESS'
// export const CHANGE_VOLUME = 'CHANGE_VOLUME'

export const TOGGLE_RANDOM = 'TOGGLE_RANDOM'

export const CHANGE_CURRENT_INDEX = 'CHANGE_CURRENT_INDEX'
export const CHANGE_SONGS = 'CHANGE_SONGS'
export const TOGGLE_OPEN = 'TOGGLE_OPEN'
export const TOGGLE_PLAY = 'TOGGLE_PLAY'

export const SONG_CLICK = 'SONG_CLICK'

export const songClick = (payload) => ({
    type: SONG_CLICK,
    payload,
})

export const toggleRandom = (payload) => ({
    type: TOGGLE_RANDOM,
    payload,
})

export const toggleOpen = (payload) => ({
    type: TOGGLE_OPEN,
    payload,
})

export const togglePlay = (payload) => ({
    type: TOGGLE_PLAY,
    payload,
})

export const changeCurrentIndex = (payload) => ({
    type: CHANGE_CURRENT_INDEX,
    payload,
})

export const changeSongs = (payload) => ({
    type: CHANGE_SONGS,
    payload,
})

// export const getCurrentList = (payload) => ({
//     type: GET_CURRENT_LIST,
//     payload,
// })

// export const getCurrentListSuccess = (payload) => ({
//     type: GET_CURRENT_LIST_SUCCESS,
//     payload,
// })

// export const getCurrentListFailed = (payload) => ({
//     type: GET_CURRENT_LIST_FAILED,
//     payload,
// })

// export const changeAudioVolume = (payload) => ({
//     type: CHANGE_VOLUME,
//     payload,
// })
