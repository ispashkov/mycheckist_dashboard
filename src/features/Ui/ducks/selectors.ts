import { createSelector } from 'reselect'
import * as routes from 'constants/routes'
import { IAppState, IRoute } from 'interfaces'
import { LanguageType } from 'types'
import { resources } from 'localization'

export const lng = (state: IAppState): LanguageType => state.ui.lng

export const getHeaderRoutes = createSelector(
  lng,
  (lng: LanguageType): IRoute[] => [
    {
      ...routes.home,
      title: resources[lng].ui.menu.home,
      exact: true,
    },
    {
      ...routes.documents,
      title: resources[lng].ui.menu.documents,
    },
    {
      ...routes.directions,
      title: resources[lng].ui.menu.directions,
    },
    {
      ...routes.admin,
      title: resources[lng].ui.menu.admin,
      path: routes.users.path,
    },
  ]
)
