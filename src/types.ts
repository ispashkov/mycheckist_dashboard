import { Languages, SortDirection } from 'enums'

export type ThemeType = 'light' | 'dark'
export type SortDirectionType = keyof typeof SortDirection
export type LanguageType = keyof typeof Languages
