import BaseService from '../BaseService';

export default class TutorialService extends BaseService {
    index = async (params = {}) => {
        return await this.get(`/tutorials`, params);
    };

    create = async (params = {}) => {
        return await this.post(`/tutorials`, params);
    };

    update = async (id, params = {}) => {
        return await this.put(`/tutorials/${id}`, params);
    };

    show = async (id) => {
        return await this.get(`/tutorials/${id}`);
    };

    destroy = async (id) => {
        return await this.delete(`/tutorials/${id}`);
    };
}
