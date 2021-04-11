import React from 'react'
import AlbumItem from '../AlbumItem'
import './AlbumList.scss'

AlbumList.propTypes = {}

function AlbumList(props) {
    console.log(props.dataTest)
    const datalist = props?.dataTest
    return (
        <div className="albumlist-wrapper">
            <div className="albumlist-header">
                <div className="albumlist-title">{props.listTitle}</div>
                <div className="albumlist-seeall">xem tất cả</div>
            </div>
            <div className="albumlist-row">
                {datalist.map((value, index) => {
                    return (
                        <div className="albumlist-column" key={index}>
                            <div className="albumlist-card">
                                <AlbumItem
                                    album={{
                                        img: value.thumbnailM,
                                        title: value.name,
                                        desc: value.genre,
                                    }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AlbumList
