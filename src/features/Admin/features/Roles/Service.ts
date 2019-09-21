import { Role } from 'interfaces'

export default class UsersService {
  private static endpoint: string = '/roles'

  public static getEmptyEntity(): Role {
    return {
      name: '',
      description: '',
      permissions: [],
    }
  }
}
