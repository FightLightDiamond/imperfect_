import {call, put} from "@redux-saga/core/effects";
import {forgotPasswordAsync, loginAsync, logoutAsync, registerAsync, resetPasswordAsync} from "./api";
import {
    forgotPasswordError,
    forgotPasswordSuccess,
    loginUserError,
    loginUserSuccess,
    registerUserError,
    registerUserSuccess, resetPasswordError, resetPasswordSuccess
} from "./actions";

function* login({payload}) {
    const {email, password, provider} = payload.user;
    const {history} = payload;

    try {
        const loginUser = yield call(loginAsync, email, password, provider);
        console.log('loginUser', loginUser.data);

        if (loginUser.data) {
            localStorage.setItem('user_id', loginUser.data.id);
            localStorage.setItem('users', JSON.stringify(loginUser.data));
            yield put(loginUserSuccess(loginUser.data));
            history.push('/');
        } else {
            yield put(loginUserError(loginUser.message));
        }
    } catch (error) {
        console.log(error)
        yield put(loginUserError(error));
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
