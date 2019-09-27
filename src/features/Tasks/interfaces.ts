import React from 'react'

export interface Task {
  id?: string
  title: string
  type: string
  director: string
  executor: string
  address: string
  lat: number | string
  lng: number | string
  date: number | string
}

export interface TasksViewProps {
  onChangePage(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number): void
  onChangeRowsPerPage(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void
}
