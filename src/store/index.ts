import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from 'reducers'
import history from 'utils/history'

const logger = createLogger({
  collapsed: true,
})

const middleware = [routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export default createStore(rootReducer(history), {}, composeWithDevTools(applyMiddleware(...middleware)))
