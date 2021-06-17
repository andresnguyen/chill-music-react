import React from 'react'
import './SongItemSquare.scss'
// import ButtonPlay from '../ButtonPlay'
function SongItemSquare(props) {
    const dataItem = props?.album
    return (
        <div className="test123">
            <div>
                <div className="songitemsquare-card">
                    <div
                        className="thumb"
                        style={{
                            backgroundImage: `url(${dataItem?.img})`,
                        }}
                    />
                    <article>
                        <h1>{dataItem?.title}</h1>
                        <span>{dataItem?.desc}</span>
                    </article>
                    <div className="songitemsquare-act">
                        <div className="songitemsquare-act__tool">
                            <button className="button-play">
                                <i className="fas fa-play"></i>
                            </button>
                        </div>
                        {/* <div className="songitemsquare-button-play" id="hoverShow1">
                            <ButtonPlay />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SongItemSquare
