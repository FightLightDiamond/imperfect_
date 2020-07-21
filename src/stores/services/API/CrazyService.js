import BaseService from '../BaseService';

export default class CrazyService extends BaseService {
    index = async (params = {}) => {
        return await this.get(`/api/crazies`, params);
    };

    show = async (id, params = {}) => {
        return await this.get(`/api/crazies/${id}`, params);
    };
}
