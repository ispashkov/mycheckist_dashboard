import { Action } from './actions'
import * as types from './types'
import { User } from 'interfaces'

export interface UsersState {
  data: User[]
  isLoading: boolean
  isVisibleModal: boolean
  editableEntity: User | null
}

export const initialState: UsersState = {
  data: [],
  isLoading: false,
  isVisibleModal: false,
  editableEntity: null,
}

export default (state: UsersState = initialState, action: Action): UsersState => {
  switch (action.type) {
    case types.MODAL_TOGGLE:
      return {
        ...state,
        isVisibleModal: !state.isVisibleModal,
        editableEntity: null,
      }

    case types.ENTITY_EDIT:
      return {
        ...state,
        isVisibleModal: true,
        editableEntity: action.payload,
      }

    default:
      return state
  }
}
