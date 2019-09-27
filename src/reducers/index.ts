import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { IAppState } from 'interfaces'
import { reducer as ui } from 'features/Ui'
import { reducer as admin } from 'features/Admin'
import { reducer as tasks } from 'features/Tasks'

export default (history: History) =>
  combineReducers<IAppState>({
    router: connectRouter(history),
    ui,
    admin,
    tasks,
  })
