import {call, put} from "@redux-saga/core/effects";
import {forgotPasswordAsync, loginAsync, logoutAsync, registerAsync, resetPasswordAsync} from "./api";
import {
    forgotPasswordError,
    forgotPasswordSuccess,
    loginUserError,
    loginAdminError,
    loginUserSuccess,
    loginAdminSuccess,
    registerUserError,
    registerUserSuccess, resetPasswordError, resetPasswordSuccess
} from "./actions";
import Auth from "../../../config/Auth";

function* login({payload}) {
    const {email, password, provider} = payload.user;
    const {history} = payload;

    let putSuccess = null
    let putError = null

    alert(provider + '--' + Auth.USER_PROVIDER)
    if (provider === Auth.USER_PROVIDER) {
        putSuccess = loginUserSuccess
        putError = loginUserError
    } else {
        putSuccess = loginAdminSuccess
        putError = loginAdminError
    }

    try {
        const loginData = yield call(loginAsync, email, password, provider);
        const {data} = loginData
        console.log('loginUser', data);

        if (data) {
            localStorage.setItem(provider + '_id', data.id);
            localStorage.setItem(provider, JSON.stringify(data));

            yield put(putSuccess(data));
            history.push('/');
        } else {
            yield put(putError(loginData.message));
        }
    } catch (error) {
        console.log(error)
        yield put(putError(error));
    }
}

function* register({payload}) {
    const {email, password, password_confirmation} = payload.user;
    const {history} = payload

    try {
        const registerUser = yield call(registerAsync, email, password, password_confirmation);

        if (registerUser.data) {
            localStorage.setItem('user_id', registerUser.data.id);
            localStorage.setItem('users', JSON.stringify(registerUser.data));
            yield put(registerUserSuccess(registerUser));

            history.push('/')
        } else {
            console.log(registerUser.message)
            yield put(registerUserError(registerUser.message));
        }
    } catch (error) {
        console.log(error)
        yield put(registerUserError(error));
    }
}

function* logout({payload}) {
    const {history} = payload
    try {
        yield call(logoutAsync, history);
        localStorage.removeItem('user_id');
    } catch (error) {
    }
}

function* forgotPassword({payload}) {
    const {email} = payload.forgotUserMail;
    try {
        const forgotPasswordStatus = yield call(forgotPasswordAsync, email);
        if (!forgotPasswordStatus) {
            yield put(forgotPasswordSuccess("success"));
        } else {
            yield put(forgotPasswordError(forgotPasswordStatus.message));
        }
    } catch (error) {
        yield put(forgotPasswordError(error));

    }
}

function* resetPassword({payload}) {
    const {newPassword, resetPasswordCode} = payload;
    try {
        const resetPasswordStatus = yield call(resetPasswordAsync, resetPasswordCode, newPassword);
        if (!resetPasswordStatus) {
            yield put(resetPasswordSuccess("success"));
        } else {
            yield put(resetPasswordError(resetPasswordStatus.message));
        }
    } catch (error) {
        yield put(resetPasswordError(error));

    }
}

export {login, register, logout, forgotPassword, resetPassword}
