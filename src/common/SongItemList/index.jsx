import React from 'react'
import './SongItemList.scss'

function SongItemList() {
    return (
        <div className="songitemlist-wrapper">
            <div className="songitemlist-num">1</div>
            <div className="songitemlist-info-group">
                {/* <div
                    className="songitemlist-img"
                    style={{
                        backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/3/38/%C4%90en_V%C3%A2u.jpg)`,
                    }}
                >
                    
                </div> */}
                <img
                    className="songitemlist-img"
                    src="https://upload.wikimedia.org/wikipedia/commons/3/38/%C4%90en_V%C3%A2u.jpg"
                    alt="sharkdev"
                />
                <div>Tết này con không về</div>
            </div>
            <div className="songitemlist-name">3,354,101</div>
            <div className="songitemlist-time">04:21</div>
        </div>
    )
}

export default SongItemList
