import {createStore, applyMiddleware, compose} from "redux"
import createSagaMiddleware from "redux-saga"
//import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"
import reducer from "../reducers/index"
import rootSaga from "../sagas/Index"


/**
 * storeのセットアップ
 */
export default () => {
    let middlewares = []

    // production以外は redux-logger 有効
    if (process.env.REACT_APP_APPLY_REDUX_LOGGER) {
        middlewares.push(logger)
    }

    const sagaMiddleware = createSagaMiddleware()
    middlewares.push(sagaMiddleware)

    // production以外は Redux Chrome プラグイン有効
    // const applyingMiddlewares = process.env.REACT_APP_APPLY_REDUX_DEVTOOLS ?
    //     composeWithDevTools(applyMiddleware(...middlewares), { trace: true}) : applyMiddleware(...middlewares)
    //
    // const store = createStore(reducer, applyingMiddlewares)

    let composeEnhancers = compose;
    if (process.env.REACT_APP_APPLY_REDUX_DEVTOOLS && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true, traceLimit: 25})
    }

    const store = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)))

    sagaMiddleware.run(rootSaga)

    return store
}
