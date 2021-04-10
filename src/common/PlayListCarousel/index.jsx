import './PlayListCarousel.scss'
function PlayListCarousel() {
    const testclick = () => {
        console.log('test click')
    }
    return (
        <article id="playlist-carousel">
            <div className="playlist-carousel-container">
                <input type="radio" name="slider" id="playlist-carousel-item-1" defaultChecked />
                <input type="radio" name="slider" id="playlist-carousel-item-2" />
                <input type="radio" name="slider" id="playlist-carousel-item-3" />
                <div className="playlist-carousel-playlist-carousel-cards" onClick={testclick}>
                    <label
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
                </div>
            </div>
        </article>
    )
}

export default PlayListCarousel