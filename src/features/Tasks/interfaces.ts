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
