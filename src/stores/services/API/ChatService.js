import BaseService from '../BaseService';

export default class ChatService extends BaseService {
    contacts = async (params = {}) => {
        return await this.get(`/api/contacts`, params);
    };

    conversation = async (id, params = {}) => {
        return await this.get(`/api/conversation/${id}`, params);
    };

    send = async (params) => {
        return await this.post(`/api/conversation/send`, params);
    };
}
