import BaseService from './BaseService'

export default class AuthService extends BaseService {
  async login (params = {}) {
    return await this.post(`/login`, params)
  }

  async logout (params = {}) {
    return await this.post(`/logout`, params)
  }

  async register (params = {}) {
    return await this.post(`/register`, params)
  }

  async forgot (params = {}) {
    return await this.post(`/forgot-password`, params)
  }

  async reset (params = {}) {
    return await this.post(`/reset-password`, params)
  }

  async changePass (params = {}) {
    return await this.post(`/change-password`, params)
  }
}
