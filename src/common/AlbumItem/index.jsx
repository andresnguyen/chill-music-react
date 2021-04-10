import React from 'react'
import './AlbumItem.scss'
import PropTypes from 'prop-types'
// import img from '../../assets/img/artist.jpg'
AlbumItem.propTypes = {
    album: PropTypes.object,
}
AlbumItem.defaultProps = {
    album: {},
}
function AlbumItem({ album }) {
    // const url = `url(${img})`
    const { img, title, desc } = album
    return (
        <div className="album-item">
            <div className="img-wrapper" style={{ backgroundImage: `url(${img})` }}>
                <div className="album-item__tool">
                    {/* <i className="fas fa-heart"></i>  */}
                    {/* <i class="fas fa-play icon-play"></i> */}
                    <button className="button-nm">
                        <i className="fal fa-heart"></i>
                    </button>
                    <button className="button-play">
                        <i className="fas fa-play"></i>
                    </button>
                    <button className="button-nm">
                        <i className="far fa-ellipsis-h"></i>
                    </button>
                </div>

                <div className="opactity"></div>
            </div>

            <h3 className="album-item__title">{title}</h3>

            <span className="album-item__desc">{desc}</span>
        </div>
    )
}

export default AlbumItem
