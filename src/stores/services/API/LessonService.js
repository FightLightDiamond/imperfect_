import BaseService from '../BaseService';

export default class LessonService extends BaseService {
    index = async (params = {}) => {
        return await this.get(`/lessons`, params)
    };

    create = async (params = {}) => {
        return await this.post(`/lessons`, params)
    };

    update = async (id, params = {}) => {
        params._method = 'PUT'

        return await this.post(`/lessons/${id}`, params)
        // return await this.put(`/lessons/${id}`, params)
    };

    show = async (id) => {
        return await this.get(`/lessons/${id}`)
    };

    destroy = async (id) => {
        return await this.post(`/lessons/${id}`, {_method: 'DELETE'})
        // return await this.delete(`/lessons/${id}`)
    };
}
