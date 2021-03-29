import React from 'react'
import './AlbumItem.scss'
import img from '../../assets/img/artist.jpg'
AlbumItem.propTypes = {}

function AlbumItem() {
    const url = `url(${img})`
    return (
        <div className="album-item">
            <div className="img-wrapper" style={{ backgroundImage: url }}>
                <div className="album-item__tool">
                    {/* <i className="fas fa-heart"></i>  */}
                    {/* <i class="fas fa-play icon-play"></i> */}
                    <button className="button-nm">
                        <i className="fal fa-heart"></i>
                    </button>
                    <button className="button-play">
                        <i class="fas fa-play"></i>
                    </button>
                    <button className="button-nm">
                        <i class="far fa-ellipsis-h"></i>
                    </button>
                </div>

                <div className="opactity"></div>
            </div>

            <h3 className="album-item__title">Hương Đêm Bay Xa</h3>

            <span className="album-item__desc">Nhạc trẻ - Hariwon</span>
        </div>
    )
}

export default AlbumItem
