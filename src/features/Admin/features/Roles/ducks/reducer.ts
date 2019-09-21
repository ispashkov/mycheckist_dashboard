import { Action } from './actions'
import * as types from './types'
import { Role } from 'interfaces'

export interface RolesState {
  data: Role[]
  isLoading: boolean
  isVisibleModal: boolean
  editableEntity: Role | null
  selectedEntity: Role | null
}

export const initialState: RolesState = {
  data: [],
  isLoading: false,
  isVisibleModal: false,
  editableEntity: null,
  selectedEntity: null,
}

export default (state: RolesState = initialState, action: Action): RolesState => {
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

    case types.ENTITY_SELECT:
      return {
        ...state,
        selectedEntity: action.payload,
      }

    default:
      return state
  }
}
