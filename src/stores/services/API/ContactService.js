import BaseService from '../BaseService';

export default class CourseService extends BaseService {
    create = async (params = {}) => {
        return await this.post(`/api/v1/contacts`, params);
    };
}
