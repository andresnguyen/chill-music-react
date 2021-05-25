import React from 'react'
import AlbumItem from '../AlbumItem'
import './AlbumList.scss'
import { Link } from 'react-router-dom'
AlbumList.propTypes = {}

function AlbumList(props) {
    const datalist = props?.dataTest
    return (
        <div className="albumlist-wrapper">
            <div className="albumlist-header">
                <div className="albumlist-title">{props.listTitle}</div>
                <Link to="/collection" style={{ textDecoration: 'none' }}>
                    <div className="albumlist-seeall">xem tất cả</div>
                </Link>
            </div>
            <div className="grid">
                <div className="row">
                    {datalist.map((value, index) => {
                        return (
                            <div className="col c-2 m-2" key={index}>
                                <AlbumItem
                                    album={{
                                        img: value.thumbnailM,
                                        title: value.name,
                                        desc: value.genre,
                                    }}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AlbumList
