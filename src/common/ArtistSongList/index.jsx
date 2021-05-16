import React from 'react'
import SongItemList from '../SongItemList'
import './ArtistSongList.scss'
const dataTest = [
    {
        views: 1079552973,
        listArtists: ['Sơn Tùng MTP'],
        _id: '5fffc9cb7c4793a7bb54d62f',
        title: 'em của ngày hôm qua',
        genre: 'nhạc trữ tình',
        path:
            'https://vnso-zn-10-tf-mp3-320s1-zmp3.zadn.vn/2230dfa075e49cbac5f5/5010429400734237327?authen=exp=1611200306~acl=/2230dfa075e49cbac5f5/*~hmac=6128104d84e1b70031752a0dd0f75117&fs=MTYxMTAyNzUwNjIwM3x3ZWJWNnwxMDIxNDQ0NjmUsICxfDExNy41LjE0Ni44NA',
        image:
            'https://lh3.googleusercontent.com/LBZbzy9NXoY_0vQQOkDQnVSzu27am8yxvcsxOk0CPhfnr7uraTv-9ONUje1b7zcK0bTqTbI1_pY2hVzXu4aGbSQ9',
        createdAt: '2021-01-16T17:15:20.114Z',
        updatedAt: '2021-01-16T17:15:20.114Z',
    },
    {
        views: 1078847250,
        listArtists: ['Sơn Tùng MTP'],
        _id: '5fffc9cb7c4793a7bb54d630',
        title: 'nơi này có anh',
        genre: 'nhạc trẻ',
        path:
            'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/HEEfESjkoNlrc41qL8sM01fj3zoEJlHuGNyfjUnz.mp3',
        image: 'http://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/a/2/0/5/a205073a584189de015e59f23e781483.jpg',
    },
    {
        views: 1079553155,
        listArtists: ['Sơn Tùng MTP'],
        _id: '5fffc9cb7c4793a7bb54d632',
        title: 'chúng ta của hiện tại',
        genre: 'nhạc trẻ',
        path:
            'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/HEEfESjkoNlrc41qL8sM01fj3zoEJlHuGNyfjUnz.mp3',
        image: 'http://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/a/2/0/5/a205073a584189de015e59f23e781483.jpg',
    },
    {
        views: 1079552975,
        listArtists: ['Sơn Tùng MTP'],
        _id: '5fffc9cb7c4793a7bb54d633',
        title: 'thái bình mồ hôi rơi',
        genre: 'nhạc trẻ',
        path:
            'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/HEEfESjkoNlrc41qL8sM01fj3zoEJlHuGNyfjUnz.mp3',
        image: 'http://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/a/2/0/5/a205073a584189de015e59f23e781483.jpg',
    },
    {
        views: 1078029173,
        listArtists: ['Sơn Tùng MTP'],
        _id: '5fffc9cb7c4793a7bb54d634',
        title: 'khuôn mặt đáng thương',
        genre: 'nhạc trẻ',
        path:
            'https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/HEEfESjkoNlrc41qL8sM01fj3zoEJlHuGNyfjUnz.mp3',
        image: 'http://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/a/2/0/5/a205073a584189de015e59f23e781483.jpg',
    },
]
function ArtistSongList() {
    return (
        <>
            <div className="artist-song-list-title">Phổ biến</div>
            <div className="artist-song-list-wrapper">
                <div className="artist-song-list-left">
                    {dataTest.map((value, index) => {
                        return <SongItemList key={index} data={value} no={index} />
                    })}
                </div>
                <div className="artist-song-list-right">
                    <div className="artist-song-list-right-title">Artist pick</div>
                    <div className="artist-song-list-right-song">
                        <img
                            className="artist-song-list-right-img"
                            src="https://lh3.googleusercontent.com/LBZbzy9NXoY_0vQQOkDQnVSzu27am8yxvcsxOk0CPhfnr7uraTv-9ONUje1b7zcK0bTqTbI1_pY2hVzXu4aGbSQ9"
                            alt="sharkdev"
                        />
                        <div className="artist-song-list-right-info">
                            <div>Posted By Sơn Tùng M-TP</div>
                            <div>Muộn rồi mà sao còn</div>
                            <div>Song</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtistSongList
