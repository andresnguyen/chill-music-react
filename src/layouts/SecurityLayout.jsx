import Header from '../common/Header'
import PlayerQueue from '../common/PlayerQueue'
import PlayMusic from '../common/PlayMusic'
// import { NavLink } from 'react-router-dom'

// import Test from './test'
import './SecurityLayout.scss'
import Sidebar from '../common/Sidebar'
function SecurityLayout({ children }) {
    return (
        <div>
            <div className="top-layout">
                <Sidebar />
                <div className="right-content">
                    {/* <Test /> */}
                    <div className="right-content-backgroud">
                        <Header />
                        <PlayerQueue />
                        {children}
                    </div>
                    {/* <h2>CSS Template</h2>
                    <p>A full-height, fixed sidenav and content.</p> */}
                </div>
            </div>
            <div className="bottom-layout">
                <PlayMusic />
            </div>
            {/* <Header />
            <div className="security-layout-wrapper">
                <PlayerQueue />
                {children}
            </div>
            <PlayMusic /> */}
        </div>
    )
}

export default SecurityLayout
