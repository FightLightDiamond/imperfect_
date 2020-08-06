import axios from 'axios'
import Api from '../../config/Api'

export default class BaseService {
    constructor(auth, domain = null) {
        if (auth) {
            this.setAuth(auth)
        }

        if (domain) {
            this.setDomain(domain)
        } else {
            this.setDomain(Api.domain)
        }
    }

    setDomain = (domain) => {
        this.domain = domain
    }

    getDomain = () => {
        return this.domain
    }

    getUrl = uri => {
        return this.getDomain() + uri
    }

    setAuth = (auth) => {
        if (this.isAuthenticated(auth)) {
            const token = this.getToken(auth)

            axios.interceptors.request.use(function (config) {
                config.headers.Authorization = `Bearer ${token}`
                return config
            })
        }
    }

    isAuthenticated = (auth) => {
        try {
            const loginInfo = JSON.parse(localStorage.getItem(auth))
            return !!loginInfo.access_token
        } catch (e) {
            return false
        }
    }

    getToken = (auth) => {
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
            .catch(error => error)
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
