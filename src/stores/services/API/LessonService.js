import BaseService from '../BaseService';

export default class UserService extends BaseService {
    index = async (params = {}) => {
        return await this.get(`/api/v1/lessons`, params);
    };

    create = async (params = {}) => {
        return await this.post(`/api/v1/lessons`, params);
    };

    update = async (id, params = {}) => {
        return await this.put(`/api/v1/lessons/${id}`, params);
    };

    show = async (id) => {
        return await this.get(`/api/v1/lessons/${id}`);
    };

    destroy = async (id) => {
        return await this.delete(`/api/v1/lessons/${id}`);
    };
}
