import BaseService from '../BaseService'

export default class DashboardService extends BaseService {
  async index (params = {}) {
    return await this.get(`/admin/dashboard`, params)
  }
}
