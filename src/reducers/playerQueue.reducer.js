import { ON_QUEUE, OFF_QUEUE } from '../actions/playerQueue'

const initialState = {
    isOpen: false,
}

const playerQueueReducer = (state = initialState, { type }) => {
    switch (type) {
        case ON_QUEUE:
            return {
                ...state,
                isOpen: true,
            }
        case OFF_QUEUE:
            return {
                ...state,
                isOpen: false,
            }

        default:
            return state
    }
}

export default playerQueueReducer
