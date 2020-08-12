import BaseService from '../BaseService'

export default class AdminService extends BaseService {
  async index (params = {}) {
    return await this.get(`/admin/admins`, params)
  }

  async create (params = {}) {
    return await this.post(`/admin/admins`, params)
  }

  async update (id, params = {}) {
    return await this.put(`/admin/admins/${id}`, params)
  }

  async show (id, params = {}) {
    return await this.get(`/admin/admins/${id}`, params)
  }
}
