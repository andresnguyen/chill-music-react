/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './SearchItem.scss'
SearchItem.propTypes = {}

function SearchItem() {
    return (
        <div>
            <div className="search-item-cards-list">
                <div className="search-item-card 1">
                    <div className="search-item-card_image">
                        <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
                    </div>
                    <div className="search-item-card_title title-white">
                        <p>Thư giản</p>
                    </div>
                </div>
                <div className="search-item-card 2">
                    <div className="search-item-card_image">
                        <img src="https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg" />
                    </div>
                    <div className="search-item-card_title title-white">
                        <p>Nhạc không lời</p>
                    </div>
                </div>
                <div className="search-item-card 3">
                    <div className="search-item-card_image">
                        <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
                    </div>
                    <div className="search-item-card_title">
                        <p>Cổ điển</p>
                    </div>
                </div>
                <div className="search-item-card 4">
                    <div className="search-item-card_image">
                        <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
                    </div>
                    <div className="search-item-card_title title-black">
                        <p>Đồng quê</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchItem
