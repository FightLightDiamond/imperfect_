import BaseService from '../BaseService';

export default class TutorialService extends BaseService {
    index = async (params = {}) => {
        return await this.get(`/api/v1/tutorials`, params);
    };

    create = async (params = {}) => {
        return await this.post(`/api/v1/tutorials`, params);
    };

    update = async (id, params = {}) => {
        return await this.put(`/api/v1/tutorials/${id}`, params);
    };

    show = async (id) => {
        return await this.get(`/api/v1/tutorials/${id}`);
    };

    destroy = async (id) => {
        return await this.delete(`/api/v1/tutorials/${id}`);
    };
}
