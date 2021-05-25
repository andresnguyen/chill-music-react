import React from 'react'
import ButtonPlay from '../../components/ButtonPlay'
import './UserPlaylist.scss'
function UserPlaylist() {
    return (
        <div>
            <div className="hero">
                <div
                    className="diagonal-hero-bg"
                    style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80)`,
                    }}
                >
                    <div className="stars">
                        <div className="small"></div>
                        <div className="medium"></div>
                        <div className="big"></div>
                    </div>
                </div>
                <div className="artist-playlist-info">
                    <div className="artist-playlist-confirm">Nghệ sĩ được xác nhận</div>
                    <div className="artist-playlist-name">Den Vau</div>
                    <div className="artist-playlist-numlisten">446,924 lượt nghe trong tháng</div>
                </div>
            </div>
            <div className="artist-playlist-button-play">
                <ButtonPlay />
            </div>
        </div>
    )
}

export default UserPlaylist
