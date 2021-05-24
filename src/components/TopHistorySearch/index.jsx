import React from 'react'
import './TopHistorySearch.scss'
function TopHistorySearch() {
    const listTopSearch = [
        {
            encodeId: '6IACDA86',
            title: 'Lo-fi Chút Thôi',
            thumbnail:
                'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/a/8/d/e/a8de4d21ade258bb09ca9a52b34201a7.jpg',
            isoffical: true,
            link: '/album/Lo-fi-Chut-Thoi-Various-Artists/6IACDA86.html',
            isIndie: false,
            PR: false,
            playItemMode: 0,
            subType: 1,
            uid: 457,
            thumbnailM:
                'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/8/d/e/a8de4d21ade258bb09ca9a52b34201a7.jpg',
            isShuffle: true,
            isPrivate: false,
            userName: 'Zing MP3',
            isAlbum: false,
            textType: 'Playlist',
            isSingle: false,
        },
        {
            encodeId: 'ZOUWE9EO',
            title: 'Acoustic Chill',
            thumbnail:
                'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/2/a/8/f/2a8f1acf264c9c2ae309cce8e178b9d8.jpg',
            isoffical: true,
            link: '/album/Acoustic-Chill-Various-Artists/ZOUWE9EO.html',
            isIndie: false,
            PR: false,
            playItemMode: 0,
            subType: 1,
            uid: 88,
            thumbnailM:
                'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/a/8/f/2a8f1acf264c9c2ae309cce8e178b9d8.jpg',
            isShuffle: true,
            isPrivate: false,
            userName: 'Zing MP3',
            isAlbum: false,
            textType: 'Playlist',
            isSingle: false,
        },
        {
            encodeId: 'ZOCIIUWW',
            title: 'Chill Hits',
            thumbnail:
                'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/a/5/c/d/a5cdfcc98a3368029781ff6bfa9b3abe.jpg',
            isoffical: true,
            link: '/album/Chill-Hits-Various-Artists/ZOCIIUWW.html',
            isIndie: false,
            PR: false,
            playItemMode: 0,
            subType: 1,
            uid: 309,
            thumbnailM:
                'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/5/c/d/a5cdfcc98a3368029781ff6bfa9b3abe.jpg',
            isShuffle: true,
            isPrivate: false,
            userName: 'Zing MP3',
            isAlbum: false,
            textType: 'Playlist',
            isSingle: false,
        },
        {
            encodeId: 'ZOCIIUWW',
            title: 'Chill Hits',
            thumbnail:
                'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/a/5/c/d/a5cdfcc98a3368029781ff6bfa9b3abe.jpg',
            isoffical: true,
            link: '/album/Chill-Hits-Various-Artists/ZOCIIUWW.html',
            isIndie: false,
            PR: false,
            playItemMode: 0,
            subType: 1,
            uid: 309,
            thumbnailM:
                'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/5/c/d/a5cdfcc98a3368029781ff6bfa9b3abe.jpg',
            isShuffle: true,
            isPrivate: false,
            userName: 'Zing MP3',
            isAlbum: false,
            textType: 'Playlist',
            isSingle: false,
        },
    ]
    return (
        <div className="top-history-search-wrapper">
            <div className="top-history-search-cards">
                {listTopSearch.map((value, index) => {
                    return (
                        <div className="top-history-search-card content" key={index}>
                            <div className="top-history-search-card-content">
                                <div className="top-history-search-card-img">
                                    <img
                                        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                                        alt="Gamer"
                                    />
                                </div>
                                <div className="top-history-search-card-label">Top {index + 1}</div>
                                <div className="top-history-search-card-title">{value.title}</div>
                            </div>
                        </div>
                    )
                })}
                {/* <div className="top-history-search-card content">
                    <div className="top-history-search-card-content">
                        <div className="top-history-search-card-img">
                            <img
                                src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                                alt="keyboard"
                            />
                        </div>
                        <div className="top-history-search-card-label">Technology</div>
                        <div className="top-history-search-card-title">Google Stadia: The Futáure of Gaming</div>
                    </div>
                </div>
                <div className="top-history-search-card content">
                    <div className="top-history-search-card-content">
                        <div className="top-history-search-card-img">
                            <img
                                src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80"
                                alt="Controller"
                            />
                        </div>
                        <div className="top-history-search-card-label">Consoles</div>
                        <div className="top-history-search-card-title">PS5 won't launch before mid-2020</div>
                    </div>
                </div>
                <div className="top-history-search-card content">
                    <div className="top-history-search-card-content">
                        <div className="top-history-search-card-img">
                            <img
                                src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80"
                                alt="Controller"
                            />
                        </div>
                        <div className="top-history-search-card-label">Consoles</div>
                        <div className="top-history-search-card-title">PS5 won't launch before mid-2020</div>
                    </div>
                </div>
           */}
            </div>
        </div>
    )
}

TopHistorySearch.propTypes = {}

export default TopHistorySearch
