import Header from '../common/Header'
import PlayerQueue from '../common/PlayerQueue'
import PlayMusic from '../common/PlayMusic'
import './SecurityLayout.scss'
function SecurityLayout({ children }) {
    return (
        <>
            <Header />
            <div className="security-layout-wrapper">
                <PlayerQueue />
                {children}
            </div>
            <PlayMusic />
        </>
    )
}

export default SecurityLayout
