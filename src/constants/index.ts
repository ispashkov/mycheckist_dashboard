import { FetchParamsBase } from 'interfaces'

export const themeTypeStorageKey: string = 'theme_type'
export const langStorageKey: string = 'lng'
export const menuWidth: number = 320
export const tooltipDelay: number = 0

export const defaultFetchParams: FetchParamsBase = {
  size: 10,
  page: 0,
  sort: 'id,asc',
}
