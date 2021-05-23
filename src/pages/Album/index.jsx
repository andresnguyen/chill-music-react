import React from 'react'
import './Album.scss'
function Album() {
    return (
        <div>
            <div className="albumpage-background" />
            <section className="albumpage-section">
                <div className="albumpage-info">
                    <div className="albumpage-art">
                        <img
                            alt=""
                            src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/5085b7a0d80811eaac7adb7ae8cc1536.png"
                        />
                        <div className="actions">
                            <div className="play">Play</div>
                            <div className="bookmark">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#faa800"
                                    height={24}
                                    viewBox="0 0 24 24"
                                    width={24}
                                >
                                    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="album-details">
                        <h2>
                            <img alt="" src="https://68.media.tumblr.com/avatar_edbd71e8c8ac_128.png" />
                            Đen Vâu
                        </h2>
                        <h1>Đưa nhau đi trốn</h1>
                        <span>
                            {/* <span>Hard Rock </span> */}
                            <span>© 2021 QuocThuan Recording Corporation</span>
                        </span>
                        <p>
                            Đưa nhau đi trốn là album thứ mười của ca sỹ người Việt Đen Vâu, phát hành vào ngày 5 tháng
                            8 năm 2016. Album được công bố vào ngày 20 tháng 5 năm 2016, và một video lời bài hát đã
                            được phát hành cùng lúc trên YouTube của ban nhạc. kênh. Sáu ngày sau, ban nhạc đã phát hành
                            một video lyric cho ca khúc "Stars" trên kênh YouTube của họ.
                        </p>
                    </div>
                </div>
                <div className="album-tracks">
                    <ol>
                        <li>
                            <span>Feel Invincible</span>
                            <span>3:49</span>
                        </li>
                        <li>
                            <span>Back From The Dead</span>
                            <span>3:33 </span>
                        </li>
                        <li>
                            <span>Stars</span>
                            <span>3:47</span>
                        </li>
                        <li>
                            <span>I Want To Live</span>
                            <span>3:28</span>
                        </li>
                        <li>
                            <span>Undefeated</span>
                            <span>3:35</span>
                        </li>
                        <li>
                            <span>Famous</span>
                            <span>3:18</span>
                        </li>
                        <li>
                            <span>Lions</span>
                            <span>3:24</span>
                        </li>
                        <li>
                            <span>Out Of Hell</span>
                            <span>3:34</span>
                        </li>
                        <li>
                            <span>Burn It Down</span>
                            <span>3:16</span>
                        </li>
                        <li>
                            <span>Watching For Comets</span>
                            <span>3:29</span>
                        </li>
                        <li>
                            <span>Saviors Of The World</span>
                            <span>3:46</span>
                        </li>
                        <li>
                            <span>The Resistance</span>
                            <span>3:52</span>
                        </li>
                    </ol>
                </div>
            </section>
        </div>
    )
}

export default Album
