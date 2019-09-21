import * as routes from '../../../constants/routes'
import { IRoute } from '../../../interfaces'

export const headerRoutes: IRoute[] = [
  {
    ...routes.home,
    exact: true,
  },
  routes.documents,
  {
    ...routes.admin,
    path: routes.users.path,
  },
]
