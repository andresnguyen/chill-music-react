import React from 'react'
import AlbumList from '../AlbumList'
import './AlbumContainer.scss'

const dataTest = [
    {
        name: 'Nghe Thôi... Đã Thấy HIT!',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/9/1/d/b/91dbde948386b4dda1001a575683448d.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/1/d/b/91dbde948386b4dda1001a575683448d.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'Nhac tre',
    },
    {
        name: 'Các Ca Khúc Pop Ballad Việt Nổi Bật',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/5/f/3/c/5f3c6acd427dd1a880b8d9d2b9865bea.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/f/3/c/5f3c6acd427dd1a880b8d9d2b9865bea.jpg',
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
        name: 'Đỉnh Cao ZING MP3',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/1/7/2/b/172b1a00ca9bced80b679c96a228e4b4.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/7/2/b/172b1a00ca9bced80b679c96a228e4b4.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'Nhac tre',
    },
    {
        name: 'Thay Lời Muốn Nói: Hẹn Hò',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/0/c/f/6/0cf61f53713fddfc912dc533fa9c4659.jpg',
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/c/f/6/0cf61f53713fddfc912dc533fa9c4659.jpg',
        realeaseDate: '2020/01/05',
        listSongs: [],
        genre: 'Nhac tre',
    },
]
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

function AlbumContainer() {
    return (
        <div className="album-container">
            <AlbumList listTitle="Chào buổi sáng" dataTest={dataTest} key="1"></AlbumList>
            <AlbumList listTitle="Đã phát gần đây" dataTest={dataTest2} key="2"></AlbumList>
            <AlbumList listTitle="Ngày năng động" dataTest={dataTest3} key="3"></AlbumList>
            <AlbumList listTitle="Lựa chọn của Chill Music" dataTest={dataTest4} key="4"></AlbumList>
        </div>
    )
}

export default AlbumContainer