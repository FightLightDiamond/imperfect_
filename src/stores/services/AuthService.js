import BaseService from './BaseService'

export default class AuthService extends BaseService {
  async login (params = {}) {
    return await this.post(`/api/login`, params)
  }

  async logout (params = {}) {
    return await this.post(`/api/logout`, params)
  }

  async register (params = {}) {
    return await this.post(`/api/register`, params)
  }

  async forgot (params = {}) {
    return await this.post(`/api/forgot-password`, params)
  }

  async reset (params = {}) {
    return await this.post(`/api/reset-password`, params)
  }

  async changePass (params = {}) {
    return await this.post(`/api/change-password`, params)
  }
}
