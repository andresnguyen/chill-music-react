import React from 'react'
import SongItemRectangle from '../../common/SongItemRectangle'
import './Album.scss'
const dataTest = [
    {
        encodeId: '67DWFC7U',
        title: 'Cho Mình Em (Single)',
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
    {
        encodeId: 'ZOB7AOWE',
        title: 'Lộn Xộn II (Single)',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/covers/6/4/64ba602113f251c498d3d2ae1d4f9d17_1520220501.jpg',
        artistsNames: 'Đen',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/covers/6/4/64ba602113f251c498d3d2ae1d4f9d17_1520220501.jpg',
        isAlbum: true,
    },
    {
        encodeId: 'ZOBZBEO7',
        title: 'Ngày Khác Lạ (Single)',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_png/covers/f/9/f9aef1614a2be6d460222086c955b90b_1519434098.png',
        artists: [
            {
                id: 'IW6W8ID6',
                name: 'Giang Phạm',
                spotlight: false,
                playlistId: 'Z6BU0IFA',
            },
            {
                id: 'IWZ98A8O',
                name: 'Triple D (3D)',
                spotlight: false,
                playlistId: 'Z6BOFIZF',
            },
        ],
        artistsNames: 'Đen, Giang Phạm, Triple D (3D)',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_png/covers/f/9/f9aef1614a2be6d460222086c955b90b_1519434098.png',
        isAlbum: true,
    },
    {
        encodeId: 'ZOZ0EWII',
        title: 'Cho Tôi Lang Thang (Single)',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/covers/4/3/43e9ff1a1a86efd042cf639bd50fb9e0_1488961974.jpg',
        artists: [],
        artistsNames: 'Ngọt, Đen',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/covers/4/3/43e9ff1a1a86efd042cf639bd50fb9e0_1488961974.jpg',
        isAlbum: true,
    },
]
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
                                    className="heart-icon"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        id="template"
                                        d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9
	c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8
	c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8
	c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"
                                    />
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
                    {dataTest.map((value, index) => {
                        return (
                            <SongItemRectangle
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
            </section>
        </div>
    )
}

export default Album
