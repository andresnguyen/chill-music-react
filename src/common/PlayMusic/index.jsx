/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './PlayMusic.scss'
// import image from '../../assets/img/artist.jpg'
import Slider from 'react-input-slider'
import ReactTooltip from 'react-tooltip'
import songApi from '../../api/songApi'
import classnames from 'classnames'
import helper from '../../utils'

PlayMusic.propTypes = {}

function PlayMusic() {
    const changingSliderRef = useRef(false)
    const changingTimeoutRef = useRef(null)
    const audioRef = useRef(null)

    const [valueMusicSlider, setValueMusicSlider] = useState(0)

    const [valueVolumeSlider, setValueVolumeSlider] = useState(() => {
        const volume = localStorage.getItem('volume') || 60
        return volume
    })
    const [isPlaying, setIsPlaying] = useState(false)

    const [songs, setSongs] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isRandom, setIsRamdom] = useState(false)
    const [repeat, setRepeat] = useState(0)

    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        const getSongs = async () => {
            const resp = await songApi.getCurrentList()
            setSongs(resp.data)
        }
        getSongs()
    }, [])

    useEffect(() => {
        HandlePlayMode()
    }, [currentIndex])

    useEffect(() => {
        audioRef.current.volume = valueVolumeSlider / 100
    }, [])

    const handleMusicSliderChange = ({ x }) => {
        setValueMusicSlider(x)
        setCurrentTime((x * audioRef.current.duration) / 100)
        changingSliderRef.current = true

        if (changingTimeoutRef.current) {
            clearTimeout(changingTimeoutRef.current)
        }

        changingTimeoutRef.current = setTimeout(() => {
            const currentValue = (x / 100) * audioRef.current.duration
            audioRef.current.currentTime = currentValue
            changingSliderRef.current = false
        }, 400)
    }

    const handleVolumeSliderChange = ({ x }) => {
        audioRef.current.volume = x / 100
        localStorage.setItem('volume', x)
        setValueVolumeSlider(x)
    }

    const handlePlayClick = () => {
        setIsPlaying(!isPlaying)

        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
    }

    const handlePrevClick = () => {
        if (currentIndex === 0) {
            setCurrentTime(0)
            audioRef.current.currentTime = 0
            return
        }

        return setCurrentIndex(currentIndex - 1)
    }

    const HandlePlayMode = () => {
        if (!audioRef.current.src) return

        audioRef.current.play()
        setIsPlaying(true)
    }

    const handleNextClick = () => {
        if (currentIndex === songs.length - 1 && repeat === 1) return setCurrentIndex(0)

        if (currentIndex === songs.length - 1) return

        return setCurrentIndex(currentIndex + 1)
    }

    const handleRandomClick = () => {
        setIsRamdom(!isRandom)

        if (!isRandom) {
        } else {
        }
    }

    const handleRepeatClick = () => {
        if (repeat === 2) return setRepeat(0)
        setRepeat(repeat + 1)
    }

    const handleTimeUpdate = (e) => {
        if (!changingSliderRef.current) {
            setCurrentTime(e.target.currentTime)
            setValueMusicSlider((e.target.currentTime / e.target.duration) * 100)
        }
    }

    const handleSongEnded = () => {
        if (repeat === 2) {
            audioRef.current.loop = true
            audioRef.current.play()
            return
        }
        handleNextClick()
    }
    return (
        <div className="footer-wrapper">
            <audio
                ref={audioRef}
                src={songs[currentIndex]?.path}
                onEnded={handleSongEnded}
                onTimeUpdate={handleTimeUpdate}
            />

            <footer className="footer">
                <div className="footer-info">
                    <Link>
                        <img src={songs[currentIndex]?.image} alt="music" className="info__img" />
                    </Link>

                    <div className="info__name">
                        <Link>{songs[currentIndex]?.title}</Link>

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
                        {isRandom ? (
                            <i
                                className="fal fa-random fa-random-active"
                                onClick={handleRandomClick}
                                data-tip=""
                                data-for="on-random-id"
                            ></i>
                        ) : (
                            <i
                                className="fal fa-random"
                                onClick={handleRandomClick}
                                data-tip=""
                                data-for="on-random-id"
                            ></i>
                        )}

                        <i className="fal fa-backward" onClick={handlePrevClick}></i>

                        {isPlaying ? (
                            <i className="fas fa-pause icon-play" onClick={handlePlayClick}></i>
                        ) : (
                            <i className="fas fa-play icon-play" onClick={handlePlayClick}></i>
                        )}

                        <i className="fal fa-forward" onClick={handleNextClick}></i>

                        <i
                            className={classnames(
                                'fal',
                                { 'fa-repeat': repeat !== 2 },
                                { 'fa-repeat-1': repeat === 2 },
                                { 'fa-repeat-active': repeat > 0 }
                            )}
                            data-tip=""
                            data-for="repeat-id"
                            onClick={handleRepeatClick}
                        ></i>
                    </div>
                    <div className="progress-bar">
                        <span>{helper.formatDate(currentTime)}</span>
                        <Slider axis="x" x={valueMusicSlider} onChange={handleMusicSliderChange} />
                        <span className="duration-time">{helper.formatDate(audioRef.current?.duration)}</span>
                    </div>
                </div>

                <div className="footer-feature">
                    <i className="fal fa-toggle-off"></i>
                    {/* <i className="fal fa-toggle-on"></i> */}
                    <div className="volume-wrapper">
                        <i className="fal fa-volume"></i>
                        <Slider axis="x" x={valueVolumeSlider} onChange={handleVolumeSliderChange} />
                    </div>
                    {/* <i className="fal fa-volume-down"></i> */}
                    {/* <i className="fal fa-volume-mute"></i> */}
                </div>
            </footer>

            <ReactTooltip id="del-id" place="top" effect="solid">
                <span> Thêm vào thư viện</span>
            </ReactTooltip>
            <ReactTooltip id="add-id" place="top" effect="solid">
                <span> Xóa khỏi thư viện</span>
            </ReactTooltip>
            <ReactTooltip
                id="repeat-id"
                place="top"
                effect="solid"
                backgroundColor="#2D2D37"
                textColor="#fff"
                className="repeat-tooltip"
            >
                {repeat === 0 && <span> Bật phát lại tất cả</span>}
                {repeat === 1 && <span> Bật phát lại một bài</span>}
                {repeat === 2 && <span> Tắt phát lại</span>}
            </ReactTooltip>

            <ReactTooltip id="on-random-id" place="top" effect="solid" backgroundColor="#2D2D37" textColor="#fff">
                {isRandom ? <span> Tắt phát ngẫu nhiên</span> : <span> Bật phát ngẫu nhiên</span>}
            </ReactTooltip>

            {/* <ReactTooltip id="on-list-id" place="top" effect="solid">
                <span> Bật danh sách phát</span>
            </ReactTooltip> */}

            {/* <ReactTooltip id="off-list-id" place="top" effect="solid">
                <span> Tắt danh sách phát</span>
            </ReactTooltip> */}
        </div>
    )
}

export default PlayMusic
