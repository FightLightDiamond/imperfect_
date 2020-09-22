import adminService from './Admin/IndexService'
import userService from './API/IndexService'

const requestMap = {
  users: userService,
  admin: adminService,
}

export default class FactoryService {
  static request (classname, provider = 'users', domain = null) {
    let RequestClass = requestMap[provider][classname]

    if (!RequestClass) {
      throw new Error('Invalid request class name: ' + classname)
    }

    return new RequestClass(provider, domain = null)
  }
}
