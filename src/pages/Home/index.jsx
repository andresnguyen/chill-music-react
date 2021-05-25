import React from 'react'
import AlbumContainer from '../../components/AlbumContainer'
import PlayListCarousel from '../../components/PlayListCarousel'
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
