import { FetchParamsBase } from '../interfaces'

export const themeTypeStorageKey: string = 'theme_type'
export const menuWidth: number = 320

export const defaultFetchParams: FetchParamsBase = {
  size: 10,
  page: 0,
  sort: 'id,asc',
}
