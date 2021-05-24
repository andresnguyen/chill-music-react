/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import ArtistSongList from '../../components/ArtistSongList'
import ButtonPlay from '../../components/ButtonPlay'
// import PropTypes from 'prop-types';
import './Artist.scss'
Artist.propTypes = {}

function Artist() {
    return (
        <div className="artist-wrapper">
            <div className="parallax-wrapper">
                <div className="hero parallax-content">
                    <img
                        src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/5085b7a0d80811eaac7adb7ae8cc1536.png"
                        alt="sharkdev"
                    />
                    <div className="hero__title">
                        <h1>ĐEN</h1>
                        <p>446,924 lượt nghe hằng tháng</p>
                        {/* <p>
                            Photo by Sterling Davis on{' '}
                            <a href="https://unsplash.com/photos/4iXagiKXn3Y" target="_blank">
                                Unsplash
                            </a>
                        </p> */}
                    </div>
                </div>
                <div className="main-content">
                    <div className="scroll-icon-container">
                        {/* <svg className="icon--down-arrow" viewBox="0 0 24 24">
                            <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
                        </svg> */}
                        <ButtonPlay />
                    </div>
                    <ArtistSongList />
                </div>
            </div>
        </div>
    )
}

export default Artist
