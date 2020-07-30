import BaseService from '../BaseService';

export default class UserService extends BaseService {
    update = async (id, params = {}) => {
        return await this.put(`/api/v1/file-lessons/${id}`, params);
    };

    destroy = async (id) => {
        return await this.delete(`/api/v1/file-lessons/${id}`);
    };
}
