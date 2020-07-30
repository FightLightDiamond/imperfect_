import BaseService from '../BaseService';

export default class RemindService extends BaseService {
    create = async (params = {}) => {
        return await this.post(`/api/reminds`, params);
    };

    index = async (id, params = {}) => {
        return await this.get(`/api/reminds`, params);
    };
}
