import BaseService from '../BaseService';

export default class CourseService extends BaseService {
    create = async (params = {}) => {
        return await this.post(`/contacts`, params);
    };
}
