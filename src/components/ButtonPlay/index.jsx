import React from 'react'
import './ButtonPlay.scss'
ButtonPlay.propTypes = {}

function ButtonPlay() {
    return (
        <div className="button-play-container">
            <a href="/" className="button-play-playBut">
                {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In  */}
                <svg
                    version="1.1"
                    x="0px"
                    y="0px"
                    width="100%"
                    height="100%"
                    viewBox="0 0 213.7 213.7"
                    enableBackground="new 0 0 213.7 213.7"
                    xmlSpace="preserve"
                >
                    <polygon
                        className="button-play-triangle"
                        id="XMLID_18_"
                        fill="none"
                        strokeWidth={7}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        points="
73.5,62.5 148.5,105.8 73.5,149.1 "
                    />
                    {/* <circle
                        className="button-play-circle"
                        id="XMLID_17_"
                        fill="none"
                        strokeWidth={7}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        cx="106.8"
                        cy="106.8"
                        r="103.3"
                    /> */}
                </svg>
            </a>
        </div>
    )
}

export default ButtonPlay
