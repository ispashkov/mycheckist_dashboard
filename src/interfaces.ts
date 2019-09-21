import React from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { RouterState } from 'connected-react-router'
import { UIState } from './features/Ui/ducks/reducer'
import { AdminState } from './features/Admin/ducks/reducer'

export interface IError {
  title: string
  description: string
  status?: number
}

export interface IAppState {
  router: RouterState
  ui: UIState
  admin: AdminState
}

export interface IRoute {
  path: string
  title: string
  exact: boolean
  icon?: React.ComponentType<SvgIconProps>
}

export interface User {
  id?: string
  firstName: string
  middleName: string
  lastName: string
  login: string
  photo: string
}

export interface PaginationParams {
  number: number
  size: number
  totalElements: number
  totalPages: number
}

export interface FetchParamsBase {
  number?: string | number
  page?: string | number
  size?: string | number
  sort?: string | number
}

export interface Role {
  id?: string
  name: string
  description: string
  permissions: Array<Permission>
}

export interface Permission {
  id: string
  name: string
  children: Array<Permission>
}
