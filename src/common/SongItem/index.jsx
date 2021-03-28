import React from 'react'
import './SongItem.scss'
import img from '../../assets/img/artist.jpg'
import { Link } from 'react-router-dom'

SongItem.propTypes = {}

function SongItem() {
    const url = `url(${img})`
    const urlPlay = `url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/icons/icon-playing.gif)`
    return (
        <div className="song-item">
            <Link to="" className="song-item__img" style={{ backgroundImage: url }}>
                <div className="song-item__opacity"></div>
                {/* <i class="fas fa-play song-item__play"></i> */}
                <i className="action-play song-item__play" style={{ backgroundImage: urlPlay }}></i>
            </Link>

            <div className="song-item__info">
                <h3 className="song-item__name">Ai Là Người Thương Em</h3>

                <div className="artist-list">
                    <Link to="">Quan AP</Link>
                    <Link to="">K-ICM</Link>
                </div>
            </div>
            <div className="song-item__others">
                <button>
                    {/* <i class="fas fa-heart"></i> */}
                    <i class="fal fa-heart"></i>
                </button>
                <button>
                    <i class="far fa-ellipsis-h"></i>
                </button>
            </div>
        </div>
    )
}

export default SongItem