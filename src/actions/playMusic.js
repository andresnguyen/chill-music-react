export const GET_CURRENT_LIST = 'GET_CURRENT_LIST'
export const GET_CURRENT_LIST_FAILED = 'GET_CURRENT_LIST_FAILED'
export const GET_CURRENT_LIST_SUCCESS = 'GET_CURRENT_LIST_SUCCESS'
export const CHANGE_AUDIO_VOLUME = 'CHANGE_AUDIO_VOLUME'

export const getCurrentList = (payload) => ({
    type: GET_CURRENT_LIST,
    payload,
})

export const getCurrentListSuccess = (payload) => ({
    type: GET_CURRENT_LIST_SUCCESS,
    payload,
})

export const getCurrentListFailed = (payload) => ({
    type: GET_CURRENT_LIST_FAILED,
    payload,
})

export const changeAudioVolume = (payload) => ({
    type: CHANGE_AUDIO_VOLUME,
    payload,
})
