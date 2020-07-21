import BaseService from '../BaseService';

export default class HistoryService extends BaseService {
    index = async (params = {}) => {
        return await this.get(`/api/crazy-histories`, params);
    };

    listen = async (params = {}) => {
        return await this.get(`/api/crazy-listen-histories`, params);
    };

    read = async (params = {}) => {
        return await this.get(`/api/crazy-read-histories`, params);
    };

    write = async (params = {}) => {
        return await this.get(`/api/crazy-write-histories`, params);
    };

    speak = async (id, params = {}) => {
        return  await this.get(`/api/test/crazy-write/${id}`, params);
    };
}
