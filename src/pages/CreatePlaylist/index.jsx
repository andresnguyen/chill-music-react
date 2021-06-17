import React from 'react'
import SongItemRectangle from '../../components/SongItemRectangle'
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
            <div className="albumpage-wrapper">
                <div className="albumpage-header-content">
                    <div className="albumpage-header-content-left">
                        <img
                            src="https://i.ytimg.com/vi/xypzmu5mMPY/maxresdefault.jpg"
                            alt="Thiên Hà Trước Hiên Nhà – Datmaniac"
                        />
                    </div>
                    <div class="albumpage-header-content-right">
                        <h2>PLAYLIST</h2>
                        <div className="albumpage-header-content-right-title">Thiên hà trước hiên nhà - Datmaniac</div>
                        <span>6 bài hát, 24 phút 2 giây</span>
                    </div>
                </div>
                <div className="albumpage-content">
                    <div className="albumpage-content-tool">
                        <button className="albumpage-content-button-play">
                            <i className="fas fa-play"></i>
                        </button>
                        <div className="albumpage-content-button-heart">
                            <i id="heart" class="far fa-heart"></i>
                        </div>
                    </div>
                    <div>
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
                </div>
            </div>
        </div>
    )
}

export default Album
