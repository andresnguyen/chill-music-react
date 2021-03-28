/* eslint-disable no-unused-vars */
import classnames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import ListSongsBack from '../ListSongsBack'
import ListSongsFront from '../ListSongsFront'
import SongItem from '../SongItem'
import './PlayerQueue.scss'

PlayerQueue.propTypes = {}

function PlayerQueue() {
    const isOpen = useSelector((state) => state.playMusicReducer.isOpen)
    return (
        <div className={classnames('player-queue', { 'player-queue--active': isOpen })}>
            <h3 className="queue-title">Danh sách phát</h3>

            <SongItem />

            {/* <ListSongsFront />
            <ListSongsBack /> */}
        </div>
    )
}

export default PlayerQueue
