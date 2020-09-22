import axios from 'axios'
import Api from '../../config/Api'

export default class BaseService {
    constructor(provider, domain = null) {
        this.setAuth(provider)
        this.setDomain(domain)
    }

    setDomain = domain => {
        if(domain)
            this.domain = domain
        else
            this.domain = Api.domain
    }

    getDomain = () => {
        return this.domain
    }

    getUrl = uri => {
        return this.getDomain() + uri
    }

    setAuth = provider => {
        if (this.isAuthenticated(provider)) {
            const token = this.getToken(provider)
            console.log(provider, token)
            axios.interceptors.request.use(function (config) {
                config.headers.Authorization = `Bearer ${token}`
                return config
            })
        }
    }

    isAuthenticated = provider => {
        try {
            const loginInfo = JSON.parse(localStorage.getItem(provider))
            return !!loginInfo.access_token
        } catch (e) {
            localStorage.removeItem(provider)
            return false
        }
    }

    getToken = provider => {
        const loginInfo = JSON.parse(localStorage.getItem(provider))
        return loginInfo.access_token
    }

    get = async (uri, params = {}) => {
        return await axios.get(this.getUrl(uri), {params: params})
            .then(authUser => authUser)
            .catch(error => error)
    }

    post = async (uri, params = {}) => {
        return await axios.post(this.getUrl(uri), params)
            .then(authUser => authUser)
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);

                    return {status: error.response.status, message: error.response.data}

                }
                console.log(error)
                return error
            })
    }

    put = async (uri, params = {}) => {
        return await axios.put(this.getUrl(uri), params)
            .then(authUser => authUser)
            .catch(error => error)
    }

    patch = async (uri, params = {}) => {
        return await axios.patch(this.getUrl(uri), params)
            .then(authUser => authUser)
            .catch(error => error)
    }

    show = async (uri) => {
        return await axios.get(this.getUrl(uri))
            .then(authUser => authUser)
            .catch(error => error)
    }

    delete = async (uri) => {
        return await axios.delete(this.getUrl(uri))
            .then(authUser => authUser)
            .catch(error => error)
    }
}
