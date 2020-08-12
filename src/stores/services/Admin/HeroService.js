import BaseService from '../BaseService'

export default class HeroService extends BaseService {
  async index (params = {}) {
    return await this.get(`/admin/heroes`, params)
  }

  async create (params = {}) {
    return await this.post(`/admin/heroes`, params)
  }

  async update (id, params = {}) {
    return await this.post(`/admin/heroes/${id}`, params)
  }

  async show (id, params = {}) {
    return await this.get(`/admin/heroes/${id}`, params)
  }

  async destroy (id) {
    return await this.delete(`/admin/heroes/${id}`)
  }
}
