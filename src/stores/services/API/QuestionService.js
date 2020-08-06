import BaseService from '../BaseService';

export default class QuestionService extends BaseService {
    index = async (params = {}) => {
        return await this.get(`/api/v1/questions`, params)
    };

    create = async (params = {}) => {
        return await this.post(`/api/v1/questions`, params)
    };

    update = async (id, params = {}) => {
        params._method = 'PUT'

        return await this.post(`/api/v1/questions/${id}`, params)
        // return await this.put(`/api/v1/questions/${id}`, params)
    };

    show = async (id) => {
        return await this.get(`/api/v1/questions/${id}`)
    };

    destroy = async (id) => {
        return await this.post(`/api/v1/questions/${id}`, {_method: 'DELETE'})
        // return await this.delete(`/api/v1/questions/${id}`)
    };
}
