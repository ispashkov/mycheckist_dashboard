import { ThemeType } from 'types'
import { themeTypeStorageKey } from '../constants'

/**
 * Check theme type
 */
export const isLightTheme = (theme: ThemeType): boolean => theme === 'light'

/**
 * Get theme type from local storage
 */
export const getThemeFromStorage = (): ThemeType => {
  return (localStorage.getItem(themeTypeStorageKey) || 'light') as ThemeType
}

/**
 * Set theme type to local storage
 */
export const setThemeToStorage = (type: ThemeType): void => {
  localStorage.setItem(themeTypeStorageKey, type)
}
