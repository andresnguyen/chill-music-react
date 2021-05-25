import Header from '../components/Header'
import PlayerQueue from '../components/PlayerQueue'
import { Helmet } from 'react-helmet'
import './SecurityLayout.scss'
import Sidebar from '../components/Sidebar'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { toggleOpen } from '../actions/playMusic'
function SecurityLayout({ children, title }) {
    const dispatch = useDispatch()
    const isOpen = useSelector((state) => state.playMusicReducer.isOpen)
    const closePlayerQueue = () => {
        if (isOpen) {
            dispatch(toggleOpen(!isOpen))
        }
    }
    return (
        <>
            <div className="top-layout">
                <div onClick={closePlayerQueue}>
                    <Sidebar />
                    <div className="right-content">
                        <div className="right-content-background">
                            <Header />
                            <Helmet>
                                <title>{title}</title>
                            </Helmet>
                            {children}
                        </div>
                    </div>
                </div>
                <PlayerQueue />
            </div>
        </>
    )
}

export default SecurityLayout
