import Auth from "../../../config/Auth";
import FactoryService from "../../services/FactoryService";

const loginAsync = async (email, password) => {
    let auth = Auth.passpost()
    auth.username = email
    auth.password = password

    return await FactoryService.request('AuthService').login(auth)
        .then(authUser => authUser)
        .catch(error => error);
}

const registerAsync = async (email, password, password_confirmation) =>
    await FactoryService.request('AuthService').register({email, password, password_confirmation})
        .then(authUser => authUser)
        .catch(error => error);

const logoutAsync = async history => {
    await FactoryService.request('AuthService').logout()
        .then(authUser => authUser)
        .catch(error => error);
    history.push('/')
}

const forgotPasswordAsync = async email => {
    return await FactoryService.request('AuthService').forgot(email)
        .then(user => user)
        .catch(error => error);
}

const resetPasswordAsync = async (resetPasswordCode, newPassword) => {
    return await FactoryService.request('AuthService').reset(resetPasswordCode, newPassword)
        .then(user => user)
        .catch(error => error);
}

export {loginAsync, registerAsync, logoutAsync, forgotPasswordAsync, resetPasswordAsync}
