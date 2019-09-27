import {
  Home as HomeIcon,
  SupervisorAccountOutlined as AdminIcon,
  InsertDriveFileOutlined as FileIcon,
  MapOutlined as MapIcon,
} from '@material-ui/icons'
import { IRoute } from 'interfaces'

export const home: IRoute = {
  title: 'Главная',
  path: '/',
  exact: false,
  icon: HomeIcon,
}

export const tasks: IRoute = {
  title: 'Задачи',
  path: '/tasks',
  exact: false,
  icon: FileIcon,
}

export const directions: IRoute = {
  title: 'Построение маршрутов',
  path: '/directions',
  exact: false,
  icon: MapIcon,
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

export const roles: IRoute = {
  title: 'Роли',
  path: '/admin/roles',
  exact: true,
}
