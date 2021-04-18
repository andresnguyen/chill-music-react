import './PlayListCarousel.scss'
const datacarousel = [
    {
        encodeId: 'ZEOIIUE6',
        title: '',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/2/d/d/d/2ddd93814aa2fb28a103f3e3eea5cde3.jpg',
        isoffical: true,
        link: '/album/Dinh-Cao-CAPTION-Various-Artists/ZEOIIUE6.html',
        isIndie: false,
        PR: false,
        playItemMode: 0,
        subType: 1,
        uid: 422,
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/d/d/d/2ddd93814aa2fb28a103f3e3eea5cde3.jpg',
        isShuffle: true,
        isPrivate: false,
        userName: 'Zing MP3',
        isAlbum: false,
        textType: 'Playlist',
        isSingle: false,
        banner: 'https://photo-zmp3.zadn.vn/banner/b/6/b/f/b6bfd2d996e9f1df8654fb468dfa142b.jpg',
        cover: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/avatars/8/9/2/5/892573e1fd7fe1163df7cb9dab321d47.jpg',
        target: '',
        description: '',
        ispr: 0,
    },
    {
        encodeId: '60I0COI0',
        title: '',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/1/c/d/0/1cd04e0b1908865b5c79d773b3f10155.jpg',
        isoffical: true,
        link: '/album/Dinh-Cao-EDM-Various-Artists/60I0COI0.html',
        isIndie: false,
        PR: false,
        playItemMode: 0,
        subType: 1,
        uid: 422,
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/c/d/0/1cd04e0b1908865b5c79d773b3f10155.jpg',
        isShuffle: true,
        isPrivate: false,
        userName: 'Zing MP3',
        isAlbum: false,
        textType: 'Playlist',
        isSingle: false,
        banner: 'https://photo-zmp3.zadn.vn/banner/6/a/8/8/6a88a9e832eef077d1fe7fbc7ce434cd.jpg',
        cover: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/avatars/6/d/7/8/6d78dede62ec3599272a0b23d1a9e271.jpg',
        target: '',
        description: '',
        ispr: 0,
    },
    {
        encodeId: 'ZOBF07ZB',
        title: 'EDM Thư Giãn Tốt Nhất',
        thumbnail:
            'https://photo-resize-zmp3.zadn.vn/w165_r1x1_jpeg/cover/7/c/2/2/7c2268c10cdc1f15e2879670c5e94380.jpg',
        isoffical: true,
        link: '/album/EDM-Thu-Gian-Tot-Nhat-Various-Artists/ZOBF07ZB.html',
        isIndie: false,
        PR: false,
        playItemMode: 0,
        subType: 1,
        uid: 309,
        thumbnailM:
            'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/c/2/2/7c2268c10cdc1f15e2879670c5e94380.jpg',
        isShuffle: true,
        isPrivate: false,
        userName: 'Zing MP3',
        isAlbum: false,
        textType: 'Playlist',
        isSingle: false,
        banner: 'https://photo-zmp3.zadn.vn/banner/9/7/4/6/97462beeb654e938f05c9c3c0c5bca8c.jpg',
        cover: 'https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/avatars/1/d/a/d/1dadb23316139fd3b6534ef03297b5a3.jpg',
        target: '',
        description:
            'Nhạc EDM đâu phải chỉ dành cho tiệc tùng, bạn sẽ bất ngờ với những bản nhạc EDM có tác dụng thư giãn trong playlist này đấy!',
        ispr: 0,
    },
]
function PlayListCarousel() {
    const testclick = () => {
        console.log(datacarousel)
    }
    return (
        <article id="playlist-carousel">
            <div className="playlist-carousel-container">
                <input type="radio" name="slider" id="playlist-carousel-item-1" defaultChecked />
                <input type="radio" name="slider" id="playlist-carousel-item-2" />
                <input type="radio" name="slider" id="playlist-carousel-item-3" />
                <div className="playlist-carousel-playlist-carousel-cards" onClick={testclick}>
                    {datacarousel.map((value, index) => {
                        if (index === 0) {
                            return (
                                <label
                                    className="playlist-carousel-card"
                                    htmlFor="playlist-carousel-item-1"
                                    id="playlist-carousel-song-1"
                                    key={index}
                                >
                                    <img src={value.banner} alt="song" />
                                </label>
                            )
                        } else {
                            return (
                                <label
                                    className="playlist-carousel-card"
                                    htmlFor={`playlist-carousel-item-${index + 1}`}
                                    id={`song-${index + 1}`}
                                    key={index}
                                >
                                    <img src={value.banner} alt="song" />
                                </label>
                            )
                        }
                    })}
                    {/* <label
                        className="playlist-carousel-card"
                        htmlFor="playlist-carousel-item-1"
                        id="playlist-carousel-song-1"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
                            alt="song"
                        />
                    </label>
                    <label className="playlist-carousel-card" htmlFor="playlist-carousel-item-2" id="song-2">
                        <img
                            src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
                            alt="song"
                        />
                    </label>
                    <label className="playlist-carousel-card" htmlFor="playlist-carousel-item-3" id="song-3">
                        <img
                            src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                            alt="song"
                        />
                    </label>
              */}
                </div>
            </div>
        </article>
    )
}

export default PlayListCarousel
