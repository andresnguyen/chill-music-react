import React from 'react'
// import ButtonPlay from '../ButtonPlay'
import './SongItemRectangle.scss'
function SongItemRectangle(props) {
    const dataItem = props?.album
    return (
        <div className="songitemrectangle-card">
            <div className="songitemrectangle-num">
                <div className="songitemrectangle-no">{dataItem.key + 1}</div>
                <i className="fas fa-play song-icon-play"></i>
            </div>
            <div
                className="thumb"
                style={{
                    backgroundImage: `url(${dataItem?.img})`,
                }}
            ></div>
            <article>
                <div className="songitemrectangle-title">{dataItem?.title}</div>
                <div className="songitemrectangle-author">{dataItem?.desc}</div>
                <span>03:20</span>
            </article>
        </div>
    )
}

export default SongItemRectangle
