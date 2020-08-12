import BaseService from '../BaseService';

export default class QuestionService extends BaseService {
    index = async (params = {}) => {
        return await this.get(`/questions`, params)
    };

    create = async (params = {}) => {
        return await this.post(`/questions`, params)
    };

    update = async (id, params = {}) => {
        params._method = 'PUT'

        return await this.post(`/questions/${id}`, params)
    };

    show = async (id) => {
        return await this.get(`/questions/${id}`)
    };

    destroy = async (id) => {
        return await this.post(`/questions/${id}`, {_method: 'DELETE'})
    };

    testSingle = async (id, params) => {
        return await this.post(`/single-test/${id}`, params)
    }
}
