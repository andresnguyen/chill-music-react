/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// import PropTypes from 'prop-types'
import './ArtistItem.scss'
ArtistItem.propTypes = {}

function ArtistItem(props) {
    const dataItem = props?.album

    return (
        <div className="artist-item-wrapper">
            <div className="artist-item">
                <div className="img-wrapper" style={{ backgroundImage: `url(${dataItem?.img})` }}>
                    <div className="artist-item__tool">
                        <button className="button-play">
                            <i className="fas fa-play"></i>
                        </button>
                    </div>
                </div>

                <h3 className="artist-item__title">{dataItem?.title}</h3>

                <span className="artist-item__desc">Nghệ sĩ</span>
            </div>
        </div>
    )
}

export default ArtistItem
