import BaseService from '../BaseService'

export default class CourseService extends BaseService {
  async index (params = {}) {
    return await this.get(`/admin/crazy-courses`, params)
  }

  async create (params = {}) {
    return await this.post(`/admin/crazy-courses`, params)
  }

  async update (id, params = {}) {
    return await this.post(`/admin/crazy-courses/${id}`, params)
  }

  async show (id, params = {}) {
    return await this.get(`/admin/crazy-courses/${id}`, params)
  }

  async destroy (id) {
    return await this.delete(`/admin/crazy-courses/${id}`)
  }
}
