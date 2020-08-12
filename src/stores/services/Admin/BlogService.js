import BaseService from '../BaseService'

export default class BlogService extends BaseService {
  async index (params = {}) {
    return await this.get(`/admin/blogs`, params)
  }

  async create (params = {}) {
    return await this.post(`/admin/blogs`, params)
  }

  async update (id, params = {}) {
    return await this.put(`/admin/blogs/${id}`, params)
  }

  async show (id, params = {}) {
    return await this.get(`/admin/blogs/${id}`, params)
  }
}
