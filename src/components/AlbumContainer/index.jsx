import React from 'react'
import AlbumList from '../AlbumList'
import SessionList from '../SessionList'
import './AlbumContainer.scss'

const dataTest2 = [
    {
        name: 'HIT-MAKER: Tăng Nhật Tuệ',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/e/4/f/0/e4f0a4e1f4bde96d620384d037630dd3.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/4/f/0/e4f0a4e1f4bde96d620384d037630dd3.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'hAutoTheme2',
    },
    {
        name: 'V-Pop: Những Bản Hits Quốc Dân',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/7/6/d/1/76d17b6d6b750f85d8a35de982d80708.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/6/d/1/76d17b6d6b750f85d8a35de982d80708.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'Nhac tre',
    },
    {
        name: 'HIT-MAKER: Châu Đăng Khoa',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/6/b/1/f/6b1ffffabad3fae27fe28466f7820dae.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/b/1/f/6b1ffffabad3fae27fe28466f7820dae.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'hAutoTheme2',
    },
    {
        name: 'HIT-MAKER: Đạt G',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/c/c/8/1/cc8150a07c312a561b320b4de50f33b3.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/c/8/1/cc8150a07c312a561b320b4de50f33b3.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'hAutoTheme2',
    },
    {
        name: 'HIT-MAKER: Dương Khắc Linh #ZMA2020',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/b/a/3/8/ba38f40aab299a0d4756b2b9c030e499.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/a/3/8/ba38f40aab299a0d4756b2b9c030e499.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'hAutoTheme2',
    },
    {
        name: 'HIT-MAKER: Thanh Hưng',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/9/2/3/c/923c5e37fce3179ad8c7736f6d6d3ede.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/2/3/c/923c5e37fce3179ad8c7736f6d6d3ede.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'hAutoTheme2',
    },
]
const dataTest3 = [
    {
        name: 'Những Sáng Tác Hay Nhất Của Phan Mạnh Quỳnh',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/covers/8/6/86cfb6d58dd40485bba8a5dc8f7289e6_1501584683.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/covers/8/6/86cfb6d58dd40485bba8a5dc8f7289e6_1501584683.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'Nhac tre',
    },
    {
        name: 'V-Pop: Những Bản Hits Quốc Dân',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/7/6/d/1/76d17b6d6b750f85d8a35de982d80708.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/6/d/1/76d17b6d6b750f85d8a35de982d80708.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'Nhac tre',
    },
    {
        name: 'Thêm Một Ai Cũng Dư Thừa',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/7/1/a/d/71ade4533603788e14fe39c608421d97.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/1/a/d/71ade4533603788e14fe39c608421d97.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'Nhac tre',
    },
    {
        name: 'HIT-MAKER: Teddy Park',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/b/a/7/7/ba773ad3197b22453989d51bdc316612.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/a/7/7/ba773ad3197b22453989d51bdc316612.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'hAutoTheme2',
    },
    {
        name: 'HIT-MAKER: Vương Anh Tú',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/0/1/7/9/017903d9a30ceba87331c52674ba50f0.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/1/7/9/017903d9a30ceba87331c52674ba50f0.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'hAutoTheme2',
    },
]
const dataTest4 = [
    {
        name: 'HIT-MAKER: Khắc Hưng #ZMA2020',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/8/8/a/6/88a67e1aee4dbb0638f36a07accd374f.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/8/a/6/88a67e1aee4dbb0638f36a07accd374f.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'hAutoTheme2',
    },
    {
        name: 'V-Pop: Những Bản Hits Quốc Dân',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/7/6/d/1/76d17b6d6b750f85d8a35de982d80708.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/6/d/1/76d17b6d6b750f85d8a35de982d80708.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'Nhac tre',
    },
    {
        name: 'HIT-MAKER: Touliver',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/4/a/c/8/4ac8468704562038024f43b31b5513f4.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/a/c/8/4ac8468704562038024f43b31b5513f4.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'hAutoTheme2',
    },
]
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
function AlbumContainer() {
    return (
        <div className="album-container">
            {/* <AlbumList listTitle="Chào buổi sáng" dataTest={dataTest} key="1"></AlbumList> */}
            <SessionList listTitle="Chào buổi sáng" dataTest={dataTest} key="1" />
            <AlbumList listTitle="Đã phát gần đây" dataTest={dataTest2} key="2"></AlbumList>
            <AlbumList listTitle="Ngày năng động" dataTest={dataTest3} key="3"></AlbumList>
            <AlbumList listTitle="Lựa chọn của Chill Music" dataTest={dataTest4} key="4"></AlbumList>
        </div>
    )
}

export default AlbumContainer
