import { Task } from './interfaces'

export default class TasksService {
  static getEmptyEntity(): Task {
    return {
      title: '',
      type: '',
      director: '',
      executor: '',
      address: '',
      lat: '',
      lng: '',
      date: '',
    }
  }
}
