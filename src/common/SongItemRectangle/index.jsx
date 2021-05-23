import React from 'react'
import ButtonPlay from '../ButtonPlay'
import './SongItemRectangle.scss'
function SongItemRectangle(props) {
    const dataItem = props?.album
    return (
        <div className="songitemrectangle-card">
            <div
                className="thumb"
                style={{
                    backgroundImage: `url(${dataItem.img})`,
                }}
            />
            <article>
                <h1>{dataItem.title}</h1>
                <span>{dataItem.desc}</span>
            </article>
            <div className="songitemrectangle-act">
                <ButtonPlay />
            </div>
        </div>
    )
}

export default SongItemRectangle
