import * as types from './types'
import { FetchParamsBase, IError, User } from 'interfaces'

export const modalToggle = () => ({
  type: types.MODAL_TOGGLE,
})

export const edit = (payload: User | null = null) => ({
  type: types.ENTITY_EDIT,
  payload,
})

export const fetch = (params: FetchParamsBase) => ({
  type: types.ENTITIES_FETCH_REQUEST,
  payload: params,
})

export const fetchSuccess = (users: User[]) => ({
  type: types.ENTITIES_FETCH_SUCCESS,
  payload: users,
})

export const fetchError = (error: IError) => ({
  type: types.ENTITIES_FETCH_ERROR,
  error,
})

export type Action = ReturnType<
  typeof modalToggle | typeof edit | typeof fetch | typeof fetchSuccess | typeof fetchError
>
