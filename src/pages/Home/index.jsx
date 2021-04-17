import React from 'react'
import AlbumContainer from '../../common/AlbumContainer'
import PlayListCarousel from '../../common/PlayListCarousel'
import './Home.scss'

Home.propTypes = {}

function Home() {
    return (
        <div className="main">
            <PlayListCarousel />
            <AlbumContainer />
        </div>
    )
}

export default Home
