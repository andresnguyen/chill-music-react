import React from 'react'
import AlbumList from '../../components/AlbumList'
import SearchItem from '../../components/SearchItem'
// import TopHistorySearch from '../../common/TopHistorySearch'
import './Search.scss'

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
Search.propTypes = {}

function Search() {
    return (
        <div className="search-container">
            <section>
                {/* <div className="search-content-title">Kết quả hàng đầu</div> */}
                {/* <div className="search-content-top-wrapper">haha</div> */}
                <AlbumList listTitle="Các tìm kiếm gần đây" dataTest={dataTest}></AlbumList>
            </section>
            {/* <section>
                <div className="search-content-title">Thể loại nghe nhiều nhất</div>
                <div className="search-content-top-wrapper">haha</div> 
                <TopHistorySearch />
            </section> */}
            <section>
                <div className="search-content-title grid">Duyệt tìm tất cả</div>
                {/* <div className="search-content-top-wrapper">haha</div> */}
                <SearchItem />
            </section>
        </div>
    )
}

export default Search
