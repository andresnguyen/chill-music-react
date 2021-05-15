import Header from '../common/Header'
import PlayerQueue from '../common/PlayerQueue'
import { Helmet } from 'react-helmet'
import './SecurityLayout.scss'
import Sidebar from '../common/Sidebar'
function SecurityLayout({ children, title }) {
    return (
        <>
            <div className="top-layout">
                <Sidebar />
                <div className="right-content">
                    <div className="right-content-background">
                        <Header />
                        <PlayerQueue />
                        <Helmet>
                            <title>{title}</title>
                        </Helmet>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecurityLayout
