import React from 'react'
import { Link } from 'react-router-dom'
import './PlayMusic.scss'
import image from '../../assets/img/artist.jpg'

PlayMusic.propTypes = {}

function PlayMusic() {
    return (
        <div className="footer-wrapper">
            <footer className="footer">
                <div className="footer-info">
                    <Link>
                        <img src={image} className="info__img" />
                    </Link>

                    <div className="info__name">
                        <Link>Sóng Gió</Link>

                        <div className="list-artist">
                            <Link>Jack</Link>
                            <Link>K-ICM</Link>
                        </div>
                    </div>

                    <i className="fal fa-heart"></i>
                    {/* <i className="fas fa-heart"></i>  */}
                </div>

                <div className="footer-playing">
                    <div className="footer-control">
                        <i className="fal fa-random"></i>
                        <i className="fal fa-backward"></i>
                        <i className="fas fa-play icon-play"></i>
                        {/* <i className="fas fa-pause"></i> */}

                        <i className="fal fa-forward"></i>
                        <i className="fal fa-repeat"></i>
                        {/* <i className="fal fa-repeat-1"></i> */}
                    </div>

                    <div className="progress-bar">progress bar</div>
                </div>

                <div className="footer-feature">
                    <i className="fal fa-toggle-off"></i>
                    {/* <i className="fal fa-toggle-on"></i> */}
                    <div className="volume-wrapper">
                        <i className="fal fa-volume"></i>
                        <div className="progress-volume">progress volume</div>
                    </div>
                    {/* <i className="fal fa-volume-down"></i> */}
                    {/* <i className="fal fa-volume-mute"></i> */}
                </div>
            </footer>
        </div>
    )
}

export default PlayMusic
