import BaseService from '../BaseService';

export default class CourseService extends BaseService {
    index = async (params = {}) => {
        return await this.get(`/api/crazy-courses`, params);

    ;
    };

    show = async (id, params = {}) => {
        return await this.get(`/api/crazy-courses/${id}`, params);

    ;
    };
}
