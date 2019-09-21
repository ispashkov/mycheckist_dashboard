import { combineReducers } from 'redux'
import users, { UsersState } from '../features/Users/ducks/reducer'
import roles, { RolesState } from '../features/Roles/ducks/reducer'

export interface AdminState {
  users: UsersState
  roles: RolesState
}

export default combineReducers<AdminState>({
  users,
  roles,
})
