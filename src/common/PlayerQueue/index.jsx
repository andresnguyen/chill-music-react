import classnames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import './PlayerQueue.scss'

PlayerQueue.propTypes = {}

function PlayerQueue() {
    const isOpen = useSelector((state) => state.playerQueue.isOpen)
    console.log(isOpen)
    return <div className={classnames('player-queue', { 'player-queue--active': isOpen })}></div>
}

export default PlayerQueue
