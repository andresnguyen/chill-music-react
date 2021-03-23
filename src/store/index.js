import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers'
import rootSaga from '../sagas'
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}) {
    const middlewares = [sagaMiddleware]

    const enhancers = [applyMiddleware(...middlewares)]

    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                  shouldHotReload: false,
              })
            : compose

    const store = createStore(reducer, initialState, composeEnhancers(...enhancers))

    sagaMiddleware.run(rootSaga)

    store.runSaga = sagaMiddleware.run
    store.injectedReducers = {}
    store.injectedSagas = {}

    return { store }
}
