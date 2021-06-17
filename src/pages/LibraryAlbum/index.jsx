import React from 'react'
import SongItemSquare from '../../components/SongItemSquare'
import './LibraryAlbum.scss'
History.propTypes = {}
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
function LibraryAlbum() {
    return (
        <div className="library-album-wrapper">
            <div className="library-album-title">Album đang theo dõi</div>
            <div className="library-album-item">
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
    )
}

export default LibraryAlbum
