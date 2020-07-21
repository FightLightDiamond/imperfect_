import BaseService from '../BaseService';

export default class TestService extends BaseService {
    listen = async (id, params = {}) => {
        return  await this.get(`/api/test/crazy-listen/${id}`, params);
    };

    reading = async (id, params = {}) => {
        return  await this.get(`/api/test/crazy-read/${id}`, params);
    };

    read = async (id, params = {}) => {
        return  await this.post(`/api/test/crazy-read/${id}`, params);
    };

    write = async (id, params = {}) => {
        return  await this.get(`/api/test/crazy-write/${id}`, params);
    };

    written = async (id, params = {}) => {
        return  await this.post(`/api/test/crazy-write/${id}`, params);
    };

    speak = async (id, params = {}) => {
        return  await this.post(`/api/test/crazy-speak/${id}`, params);
    };
}
