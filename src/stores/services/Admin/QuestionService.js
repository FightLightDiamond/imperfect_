import BaseService from '../BaseService';

export default class QuestionService extends BaseService {
    index = async (params = {}) => {
        return await this.get(`/admin/questions`, params)
    };

    create = async (params = {}) => {
        return await this.post(`/admin/questions`, params)
    };

    update = async (id, params = {}) => {
        params._method = 'PUT'

        return await this.post(`/admin/questions/${id}`, params)
        // return await this.put(`/admin/questions/${id}`, params)
    };

    show = async (id) => {
        return await this.get(`/admin/questions/${id}`)
    };

    destroy = async (id) => {
        return await this.post(`/admin/questions/${id}`, {_method: 'DELETE'})
        // return await this.delete(`/admin/questions/${id}`)
    };
}
