import React from 'react'
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
                    {/* <div
                        classNameName="user-playlist-info-img"
                        style={{
                            backgroundImage: `url(https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80)`,
                        }}
                    /> */}
                    <div className="stars">
                        {/* <img
                            src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
                            alt="music"
                            classNameName="user-playlist-info-img"
                        /> */}

                        <div className="small"></div>
                        <div className="medium"></div>
                        <div className="big"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPlaylist
