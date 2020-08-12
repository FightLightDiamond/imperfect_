import BaseService from '../BaseService'

export default class CrazyService extends BaseService {
  async index (params = {}) {
    return await this.get(`/admin/crazies`, params)
  }

  async create (params = {}) {
    return await this.post(`/admin/crazies`, params)
  }

  async update (id, params = {}) {
    return await this.put(`/admin/crazies/${id}`, params)
  }

  async show (id, params = {}) {
    return await this.get(`/admin/crazies/${id}`, params)
  }

  async destroy (id) {
    return await this.delete(`/admin/crazies/${id}`)
  }
}
