import Header from '../common/Header'
import PlayerQueue from '../common/PlayerQueue'
import PlayMusic from '../common/PlayMusic'

function SecurityLayout({ children }) {
    return (
        <>
            <Header />
            <div className="main-wrapper">
                <PlayerQueue />
                {children}
            </div>
            <PlayMusic />
        </>
    )
}

export default SecurityLayout
