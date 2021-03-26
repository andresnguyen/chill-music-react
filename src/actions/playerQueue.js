export const ON_QUEUE = 'ON_QUEUE'
export const OFF_QUEUE = 'OFF_QUEUE'

export const turnOnQueue = (payload) => ({
    type: ON_QUEUE,
    payload,
})

export const turnOffQueue = (payload) => ({
    type: OFF_QUEUE,
    payload,
})
