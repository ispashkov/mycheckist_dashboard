import { Theme } from '@material-ui/core'
import { Action } from './actions'
import * as types from './types'
import { LanguageType, ThemeType } from 'types'
import createTheme from 'theme'
import { getThemeFromStorage } from 'utils/theme'
import { langStorageKey } from '../../../constants'

const themeType = getThemeFromStorage()

export interface UIState {
  theme: Theme
  themeType: ThemeType
  isOpenMenu: boolean
  lng: LanguageType
}

export const initialState: UIState = {
  theme: createTheme(themeType),
  themeType,
  isOpenMenu: true,
  lng: (localStorage.getItem(langStorageKey) || 'ru') as LanguageType,
}

export default (state: UIState = initialState, action: Action): UIState => {
  switch (action.type) {
    case types.THEME_TOGGLE:
      return {
        ...state,
        themeType: action.payload,
        theme: createTheme(action.payload),
      }

    case types.MENU_TOGGLE:
      return {
        ...state,
        isOpenMenu: !state.isOpenMenu,
      }

    case types.LANGUAGE_CHANGE:
      return {
        ...state,
        lng: action.payload,
      }

    default:
      return state
  }
}
