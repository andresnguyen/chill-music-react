import React from 'react'
import './SongItemSquare.scss'
import ButtonPlay from '../ButtonPlay'
function SongItemSquare() {
    return (
        <div className="test123">
            <div>
                <div className="songitemsquare-card">
                    <div
                        className="thumb"
                        style={{
                            backgroundImage: `url(https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/5085b7a0d80811eaac7adb7ae8cc1536.png)`,
                        }}
                    />
                    <article>
                        <h1>To the moon</h1>
                        <span>Đen Vâu</span>
                    </article>
                    <div className="songitemsquare-act">
                        <div className="songitemsquare-button-play">
                            <ButtonPlay />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SongItemSquare
