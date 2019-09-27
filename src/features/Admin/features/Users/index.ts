import { default as reducer } from './ducks/reducer'
import * as actions from './ducks/actions'
import * as types from './ducks/types'
export { default as actionWatcher } from './ducks/sagas'

export { default } from './containers/Users'

export { reducer, actions, types }
