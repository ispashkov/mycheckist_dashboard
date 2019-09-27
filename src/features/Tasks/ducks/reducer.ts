import { Task } from '../interfaces'
import { Action } from './actions'
import * as types from './types'
import { TasksViewMode } from '../enums'

export interface TasksState {
  data: Task[]
  isLoading: boolean
  view: keyof typeof TasksViewMode
}

const initialState: TasksState = {
  data: [],
  isLoading: false,
  view: TasksViewMode.card,
}

export default (state: TasksState = initialState, action: Action): TasksState => {
  switch (action.type) {
    case types.ENTITIES_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case types.ENTITIES_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }

    case types.VIEW_MODE_CHANGE:
      return {
        ...state,
        view: action.payload,
      }

    default:
      return state
  }
}
