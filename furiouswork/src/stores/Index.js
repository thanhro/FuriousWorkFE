import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import { composeWithDevTools } from "redux-devtools-extension"
import reducer from '../reducers/Index'
import rootSaga from '../sagas/Index'

export default () => {
    let middlewares = []

    const sagaMiddleware = createSagaMiddleware()
    middlewares.push(sagaMiddleware)

    let composeEnhancers = compose
    if (process.env.REACT_APP_APPLY_REDUX_DEVTOOLS && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
    }

    const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)))

    sagaMiddleware.run(rootSaga)

    return store
}
