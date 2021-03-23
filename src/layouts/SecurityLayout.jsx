import Header from '../common/Header'
import PlayMusic from '../common/PlayMusic'

function SecurityLayout({ children }) {
    return (
        <>
            <Header />
            <div className="main-wrapper">{children}</div>
            <PlayMusic />
        </>
    )
}

export default SecurityLayout
