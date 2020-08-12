import BaseService from '../BaseService'

export default class UserService extends BaseService {
  async index (params = {}) {
    return await this.get(`/users`, params)

  }

  async create (params = {}) {
    return await this.post(`/users`, params)

  }

  async update (id, params = {}) {
    return await this.post(`/users/${id}`, params)

  }

  async show (id, params = {}) {
    return await this.get(`/users/${id}`, params)

  }

  async destroy (id) {
    return await this.delete(`/users/${id}`)

  }
}
