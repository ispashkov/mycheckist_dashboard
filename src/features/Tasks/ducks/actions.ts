import * as types from './types'
import { FetchParamsBase, IError } from 'interfaces'
import { Task } from '../interfaces'
import { TasksViewMode } from '../enums'

export const fetch = (params: FetchParamsBase) => ({
  type: types.ENTITIES_FETCH_REQUEST,
  payload: params,
})

export const fetchSuccess = (tasks: Task[]) => ({
  type: types.ENTITIES_FETCH_SUCCESS,
  payload: tasks,
})

export const fetchError = (error: IError) => ({
  type: types.ENTITIES_FETCH_ERROR,
  error,
})

export const viewModeChange = (mode: keyof typeof TasksViewMode) => ({
  type: types.VIEW_MODE_CHANGE,
  payload: mode,
})

export type Action = ReturnType<typeof fetch | typeof fetchSuccess | typeof fetchError | typeof viewModeChange>
