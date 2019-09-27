import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from 'reducers'
import history from 'utils/history'
import rootSaga from 'sagas'

const logger = createLogger({
  collapsed: true,
})

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export default createStore(rootReducer(history), {}, composeWithDevTools(applyMiddleware(...middleware)))

sagaMiddleware.run(rootSaga)
