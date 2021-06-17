/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import ArtistSongList from '../../components/ArtistSongList'
import ButtonPlay from '../../components/ButtonPlay'
import SongItemSquare from '../../components/SongItemSquare'
import ArtistItem from '../../components/ArtistItem'
// import PropTypes from 'prop-types';
import './Artist.scss'
Artist.propTypes = {}
const dataTest = [
    {
        encodeId: '67DWFC7U',
        title: 'Cho ',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/7/9/3/c/793cb0dc6bf49c1640db7726dcab3504.jpg',
        artists: [],
        artistsNames: 'Binz, Đen',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/9/3/c/793cb0dc6bf49c1640db7726dcab3504.jpg',
        isAlbum: true,
    },
    {
        encodeId: 'ZB06UEAD',
        title: 'Vì Yêu Cứ Đâm Đầu (Single)',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/6/b/5/9/6b5976bfce7675c94bcd3f9c043bd297.jpg',
        artists: [],
        artistsNames: 'MIN, Đen, JustaTee',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/b/5/9/6b5976bfce7675c94bcd3f9c043bd297.jpg',
        isAlbum: true,
    },
    {
        encodeId: 'ZOE67ZI8',
        title: 'Đố Em Biết Anh Đang Nghĩ Gì (Single)',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/6/e/8/0/6e80c9cb40d157fa2d82b7bac85c6779.jpg',
        artists: [],
        artistsNames: 'Đen, JustaTee, Biên',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/e/8/0/6e80c9cb40d157fa2d82b7bac85c6779.jpg',
        isAlbum: true,
    },
    {
        encodeId: 'ZODEAZ7U',
        title: 'Trạm Dừng Chân (Single)',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/2/4/8/6/2486b1975335d646613203ad3b0d39a9.jpg',
        artists: [],
        artistsNames: 'Kimmese, Đen',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/4/8/6/2486b1975335d646613203ad3b0d39a9.jpg',
        isAlbum: true,
    },
    {
        encodeId: 'ZODZZW6U',
        title: 'Đừng Gọi Anh Là Idol (Single)',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/b/4/f/4/b4f41abcc367dc204f4e0f5ee2d08709.jpg',
        artists: [],
        artistsNames: 'Đen, Lynk Lee',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/4/f/4/b4f41abcc367dc204f4e0f5ee2d08709.jpg',
        isAlbum: true,
    },
]
const dataTest2 = [
    {
        id: 'IWZ96FEI',
        name: 'Binz',
        playlistId: 'Z6BOE9FA',
        cover: 'https://photo-zmp3.zadn.vn/cover_artist/c/a/5/d/ca5de025c0c9b6ffc69591be59cc6f31.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/4/8/9/1/4891c7eef87e3ac85a50a2fba2674f5a.jpg',
        totalFollow: 201704,
    },
    {
        id: 'IWZ96FZE',
        name: 'JustaTee',
        playlistId: 'Z6BU0IBB',
        cover: 'https://photo-zmp3.zadn.vn/cover3_artist/b/a/ba47eed79d379a6ba43d881ad8c7a575_1411587751.png',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/3/a/6/d/3a6de9f068f10fcee2c50cdf9772ebaa.jpg',
        totalFollow: 117685,
    },
    {
        id: 'IW6WABEA',
        name: 'Biên',
        playlistId: 'Z6BOD8E0',
        cover: 'https://zmp3-static.zadn.vn/skins/zmp3-v5.2/images/default_cover.png',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/b/f/2/5/bf25d9faa714754282efa822f1d486bf.jpg',
        totalFollow: 4487,
    },
    {
        id: 'IWZ986AE',
        name: 'Touliver',
        playlistId: 'Z6BOF9I0',
        cover: 'https://photo-zmp3.zadn.vn/cover3_artist/f/b/fbda1ad619ecc4717a99a23eea7f4b5f_1412268306.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/f/b/fbda1ad619ecc4717a99a23eea7f4b5f_1510287266.jpg',
        totalFollow: 44532,
    },
    {
        id: 'IWZ96F6O',
        name: 'Karik',
        playlistId: 'Z6BOFDZW',
        cover: 'https://photo-zmp3.zadn.vn/cover_artist/9/2/a/f/92af3f838580ba3e9660c0b9820ebddd.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/8/1/1/2/81122f62be6d42182ad9cfb16e94b57e.jpg',
        totalFollow: 292130,
    },
    {
        id: 'IWZ9ZED8',
        name: 'OnlyC',
        playlistId: 'Z6BOEOB6',
        cover: 'https://photo-zmp3.zadn.vn/cover_artist/7/0/f/b/70fbc83564745cdea6f27515f750fe19.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/6/d/d/a/6dda1e6d7690c4c43ed97d6150619495.jpg',
        totalFollow: 139099,
    },
    {
        id: 'IWZA0OWC',
        name: 'MIN',
        playlistId: 'Z6BU0966',
        cover: 'https://photo-zmp3.zadn.vn/cover_artist/1/0/2/0/1020498451fdd8bf855cf2c8ec2184b8.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/7/8/c/6/78c685396dedfb3c6aef19588ea584c4.jpg',
        totalFollow: 250511,
    },
    {
        id: 'IWZAOAZZ',
        name: 'B Ray',
        playlistId: 'Z6BUI6AA',
        cover: 'https://zmp3-static.zadn.vn/skins/zmp3-v5.2/images/default_cover.png',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/c/0/0/3/c00368f9a16eefbedf836821ba6fab36.jpg',
        totalFollow: 155564,
    },
    {
        id: 'IWZAWB8O',
        name: 'Da LAB',
        playlistId: 'Z6BOD9II',
        cover: 'https://photo-zmp3.zadn.vn/cover_artist/5/b/d/c/5bdc82c11e1d0a6330d46a3483f8b3c3.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/a/f/2/2/af2221f166f8f9dfac19c90007f05926.jpg',
        totalFollow: 39084,
    },
    {
        id: 'IWZ997CU',
        name: 'SOOBIN',
        playlistId: 'Z6BUI9B8',
        cover: 'https://photo-zmp3.zadn.vn/cover_artist/8/7/6/0/8760cfebd33eca3affaf2d71f988701e.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/f/1/d/d/f1ddeb86e263f0d67f835f1b60539a34.jpg',
        totalFollow: 363418,
    },
]
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
                        <ButtonPlay />
                    </div>
                    <ArtistSongList />
                    <div>
                        <div className="artist-song-list-title">Bản phát hành nổi tiếng</div>
                        <div className="artist-song-top">
                            {dataTest.map((value, index) => {
                                return (
                                    <SongItemSquare
                                        key={index}
                                        album={{
                                            key: index,
                                            img: value.thumbnailM,
                                            title: value.title,
                                            desc: value.artistsNames,
                                        }}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <div className="artist-song-list-title">Fan cũng thích</div>
                        <div className="artist-song-top">
                            {dataTest2.map((value, index) => {
                                return (
                                    <ArtistItem
                                        key={index}
                                        album={{
                                            key: index,
                                            img: value.thumbnailM,
                                            title: value.name,
                                            desc: 'Nghệ sỹ',
                                        }}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artist
