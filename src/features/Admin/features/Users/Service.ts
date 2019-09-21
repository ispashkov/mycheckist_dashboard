import { User } from 'interfaces'

export default class UsersService {
  private static endpoint: string = '/users'

  public static getEmptyEntity(): User {
    return {
      lastName: '',
      firstName: '',
      middleName: '',
      login: '',
      photo: '',
    }
  }
}
