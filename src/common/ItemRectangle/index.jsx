import React from 'react'
import ButtonPlay from '../ButtonPlay'
import './ItemRectangle.scss'
function ItemRectangle(props) {
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

export default ItemRectangle
