import './assets/css/app.css'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import routes from './app/route'
import { Suspense } from 'react'
import LoaderPage from './components/Loader'
import 'animate.css/animate.min.css'
import PlayMusic from './components/PlayMusic'

const PrivateRoute = () => <Redirect to="/sigin" />

const WaitingComponent = (Component) => (props) => (
    <Suspense fallback={<LoaderPage />}>
        <Component {...props} />
    </Suspense>
)

function App() {
    const showContent = () => {
        let result = []
        let isLogin = true

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                const layout = route.layout
                if (route.auth && !isLogin) {
                    return (
                        <PrivateRoute
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={WaitingComponent(route.main)}
                        />
                    )
                } else {
                    return (
                        <RouteWrapper
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={WaitingComponent(route.main)}
                            layout={layout}
                            title={route.title}
                        />
                    )
                }
            })
        }
        return <Switch>{result}</Switch>
    }

    return (
        <Router>
            <div className="app">{showContent()}</div>
            <div className="bottom-layout">
                <PlayMusic />
            </div>
        </Router>
    )
}
function RouteWrapper({ component: Component, layout: Layout, title, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout {...props} title={title}>
                    <Component {...props} />
                </Layout>
            )}
        />
    )
}
export default App
