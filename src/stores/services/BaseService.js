import axios from 'axios'
import Api from '../../config/Api'

export default class BaseService {
    constructor(auth, domain = null) {
        this.setAuth(auth)
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

    setAuth = auth => {
        if (this.isAuthenticated(auth)) {
            const token = this.getToken(auth)
            console.log(auth, token)
            axios.interceptors.request.use(function (config) {
                config.headers.Authorization = `Bearer ${token}`
                return config
            })
        }
    }

    isAuthenticated = auth => {
        try {
            const loginInfo = JSON.parse(localStorage.getItem(auth))
            return !!loginInfo.access_token
        } catch (e) {
            localStorage.removeItem(auth)
            return false
        }
    }

    getToken = auth => {
        const loginInfo = JSON.parse(localStorage.getItem(auth))
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
