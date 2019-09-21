import * as types from './types'
import { Role } from 'interfaces'

export const modalToggle = () => ({
  type: types.MODAL_TOGGLE,
})

export const edit = (payload: Role | null = null) => ({
  type: types.ENTITY_EDIT,
  payload,
})

export const select = (payload: Role | null = null) => ({
  type: types.ENTITY_SELECT,
  payload,
})

export type Action = ReturnType<typeof modalToggle | typeof edit | typeof select>
