import * as types from './types'
import { ThemeType } from '../../../types'

export const themeToggle = (payload: ThemeType = 'light') => ({
  type: types.THEME_TOGGLE,
  payload,
})

export const menuToggle = () => ({
  type: types.MENU_TOGGLE,
})

export type Action = ReturnType<typeof themeToggle | typeof menuToggle>
