import * as types from './types'
import { LanguageType, ThemeType } from 'types'

export const themeToggle = (theme: ThemeType) => ({
  type: types.THEME_TOGGLE,
  payload: theme,
})

export const menuToggle = () => ({
  type: types.MENU_TOGGLE,
})

export const langChange = (lng: LanguageType) => ({
  type: types.LANGUAGE_CHANGE,
  payload: lng,
})

export type Action = ReturnType<typeof themeToggle | typeof menuToggle | typeof langChange>
