import i18n, { LanguageDetectorModule, Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { Localization } from 'interfaces'
import { langChange } from 'features/Ui/ducks/actions'
import { LanguageType } from 'types'
import store from 'store'
import { langStorageKey } from '../constants'

import en from './en'
import ru from './ru'

export interface LocalizationResources extends Resource {
  en: Localization
  ru: Localization
}

export const resources: LocalizationResources = {
  en,
  ru,
}

const languageDetector: LanguageDetectorModule = {
  type: 'languageDetector',
  init: (): void => {
    const { lng } = store.getState().ui
    store.dispatch(langChange(lng))
  },
  detect: (): string => {
    const { lng } = store.getState().ui
    return lng
  },
  cacheUserLanguage: (lng: LanguageType) => {
    localStorage.setItem(langStorageKey, lng)
  },
}

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  })

i18n.on('languageChanged', (lng: LanguageType) => {
  store.dispatch(langChange(lng))
})

export default i18n
