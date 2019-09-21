import { Theme } from '@material-ui/core'
import { Action } from './actions'
import * as types from './types'
import { ThemeType } from '../../../types'
import createTheme from '../../../theme'
import { getThemeFromStorage } from '../../../utils/theme'

const themeType = getThemeFromStorage()

export interface UIState {
  theme: Theme
  themeType: ThemeType
  isOpenMenu: boolean
}

export const initialState: UIState = {
  theme: createTheme(themeType),
  themeType,
  isOpenMenu: true,
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

    default:
      return state
  }
}
