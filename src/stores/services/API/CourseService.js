import BaseService from '../BaseService';

export default class CourseService extends BaseService {
    index = async (params = {}) => {
        const res = await this.get(`/api/crazy-courses`, params);

        return res.data;
    };

    show = async (id, params = {}) => {
        const res = await this.get(`/api/crazy-courses/${id}`, params);

        return res.data;
    };
}
