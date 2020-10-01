import adminService from './Admin/IndexService'
import userService from './API/IndexService'
import Auth from "../../config/Auth";

let requestMap = {}

requestMap[Auth.USER_PROVIDER] = userService
requestMap[Auth.ADMIN_PROVIDER] = adminService

export default class FactoryService {
  static request (classname, provider = Auth.USER_PROVIDER, domain = null) {
    let RequestClass = requestMap[provider][classname]

    if (!RequestClass) {
      throw new Error('Invalid request class name: ' + classname)
    }

    return new RequestClass(provider, domain = null)
  }
}
