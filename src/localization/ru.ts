import { Localization } from 'interfaces'

const ru: Localization = {
  translation: {
    home: {
      title: 'Главная',
    },
    tasks: {
      title: 'Задачи',
      viewMode: {
        card: 'Отображение плиткой',
        table: 'Отображение таблицей',
        map: 'Отображение на карте',
      },
    },
  },
  ui: {
    menu: {
      home: 'Главная',
      tasks: 'Задачи',
      directions: 'Построение маршрутов',
      admin: 'Администрирование',
    },

    header: {
      menu: {
        show: 'Показать меню',
        hide: 'Скрыть меню',
      },
      theme: {
        light: 'Включить дневной режим',
        dark: 'Включить ночной режим',
      },
    },
  },
}

export default ru
