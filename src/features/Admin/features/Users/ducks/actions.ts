import * as types from './types'
import { User } from 'interfaces'

export const modalToggle = () => ({
  type: types.MODAL_TOGGLE,
})

export const edit = (payload: User | null = null) => ({
  type: types.ENTITY_EDIT,
  payload,
})

export type Action = ReturnType<typeof modalToggle | typeof edit>
