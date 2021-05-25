/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// import PropTypes from 'prop-types'
import './ArtistItem.scss'
ArtistItem.propTypes = {}

function ArtistItem() {
    return (
        <div className="test">
            <div className="artist-item">
                <div
                    className="img-wrapper"
                    style={{ backgroundImage: `url(https://i.scdn.co/image/bb492bd29c5113a83314de7e064873b269d1d6eb)` }}
                >
                    <div className="artist-item__tool">
                        <button className="button-play">
                            <i className="fas fa-play"></i>
                        </button>
                    </div>
                </div>

                <h3 className="artist-item__title">Đen Vâu</h3>

                <span className="artist-item__desc">Nghệ sĩ</span>
            </div>
        </div>
    )
}

export default ArtistItem
