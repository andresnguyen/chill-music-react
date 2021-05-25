import React from 'react'
import ItemRectangle from '../ItemRectangle'
import './SessionList.scss'
function SessionList(props) {
    const datalist = props?.dataTest
    return (
        <div className="sessionList-wrapper">
            <div className="sessionList-header">
                <div className="sessionList-title">{props.listTitle}</div>
            </div>

            <div className="sessionList-container">
                {datalist.map((value, index) => {
                    return (
                        <div className="sessionList-item" key={index}>
                            <ItemRectangle
                                album={{
                                    img: value.thumbnailM,
                                    title: value.title,
                                    desc: value.artistsNames,
                                }}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SessionList
