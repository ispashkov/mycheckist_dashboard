import {
  Home as HomeIcon,
  SupervisorAccount as AdminIcon,
  InsertDriveFileOutlined as FileIcon,
} from '@material-ui/icons'
import { IRoute } from '../interfaces'

export const home: IRoute = {
  title: 'Главная',
  path: '/',
  exact: false,
  icon: HomeIcon,
}

export const admin: IRoute = {
  title: 'Администрирование',
  path: '/admin',
  exact: false,
  icon: AdminIcon,
}

export const users: IRoute = {
  title: 'Пользователи',
  path: '/admin/users',
  exact: true,
}

export const documents: IRoute = {
  title: 'Документы',
  path: '/documents',
  exact: false,
  icon: FileIcon,
}

export const notFound: IRoute = {
  title: 'Страница не найдена',
  path: '/notFound',
  exact: true,
}

export const auth: IRoute = {
  title: 'Авторизация',
  path: '/auth',
  exact: true,
}

export const registration: IRoute = {
  title: 'Регистрация',
  path: '/registration',
  exact: true,
}

export const roles: IRoute = {
  title: 'Роли',
  path: '/admin/roles',
  exact: true,
}
