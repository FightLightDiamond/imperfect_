import axios from 'axios';
import Api from '../../config/Api';

export default class BaseService {
    constructor(auth = 'user', domain = null) {
        this.setAuth(auth);

        if (domain) {
            this.setDomain(domain);
        } else {
            this.setDomain(Api.domain);
        }
    }

    setDomain = (domain) => {
        this.domain = domain;
    };

    getDomain = () => {
        return this.domain;
    };

    getUrl = uri => {
        return this.getDomain() + uri;
    };

    setAuth = (auth) => {
        // const loginInfo = JSON.parse(localStorage.getItem(auth))
        // console.log(auth, loginInfo);
        //
        // axios.interceptors.request.use(function (config) {
        //   if (loginInfo) {
        //     config.headers.Authorization = `Bearer ${loginInfo.access_token}`
        //   }
        //   return config
        // })
    };

    get = async (uri, params = {}) => {
        return await axios.get(this.getUrl(uri), {params: params});
    };

    post = async (uri, params = {}) => {
        return await axios.post(this.getUrl(uri), params);
    };

    put = async (uri, params = {}) => {
        return await axios.put(this.getUrl(uri), params);
    };

    patch = async (uri, params = {}) => {
        return await axios.patch(this.getUrl(uri), params);
    };

    show = async (uri) => {
        return await axios.get(this.getUrl(uri));
    };

    delete = async (uri) => {
        return await axios.delete(this.getUrl(uri));
    };
}
