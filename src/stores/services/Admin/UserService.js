import BaseService from '../BaseService'

export default class UserService extends BaseService {
  async index (params = {}) {
    return await this.get(`/admin/users`, params)
  }

  async create (params = {}) {
    return await this.post(`/admin/users`, params)
  }

  async update (id, params = {}) {
    return await this.put(`/admin/users/${id}`, params)
  }

  async show (id, params = {}) {
    return await this.get(`/admin/users/${id}`, params)
  }
}
