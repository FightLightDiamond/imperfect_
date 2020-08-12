import BaseService from '../BaseService';

export default class UserService extends BaseService {
    update = async (id, params = {}) => {
        return await this.put(`/file-lessons/${id}`, params);
    };

    destroy = async (id) => {
        return await this.delete(`/file-lessons/${id}`);
    };
}
