import {all, call, fork, put, takeEvery, takeLatest} from 'redux-saga/effects';
import FactoryService from '../../services/FactoryService'
import Auth from '../../../config/Auth'

import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    FORGOT_PASSWORD,
    RESET_PASSWORD,
} from '../actions';

import {
    loginUserSuccess,
    loginUserError,
    registerUserSuccess,
    registerUserError,
    forgotPasswordSuccess,
    forgotPasswordError,
    resetPasswordSuccess,
    resetPasswordError
} from './actions';

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

const loginWithEmailPasswordAsync = async (email, password) => {
    let auth = Auth.passpost()
    auth.username = email
    auth.password = password

    return await FactoryService.request('AuthService').login(auth)
        .then(authUser => authUser)
        .catch(error => error);
}

function* loginWithEmailPassword({payload}) {
    const {email, password} = payload.user;
    const {history} = payload;

    try {
        const loginUser = yield call(loginWithEmailPasswordAsync, email, password);
        console.log('loginUser', loginUser.data);

        if (loginUser.data) {
            localStorage.setItem('user_id', loginUser.data.id);
            localStorage.setItem('user', JSON.stringify(loginUser.data));
            yield put(loginUserSuccess(loginUser.data));
            history.push('/');
        } else {
            yield put(loginUserError(loginUser.message));
        }
    } catch (error) {
        yield put(loginUserError(error));

    }
}

export function* watchRegisterUser() {
    yield takeLatest(REGISTER_USER, registerWithEmailPassword);
}

const registerWithEmailPasswordAsync = async (email, password, password_confirmation) =>
    await FactoryService.request('AuthService').register({email, password, password_confirmation})
        .then(authUser => authUser)
        .catch(error => error);

function* registerWithEmailPassword({payload}) {
    const {email, password, password_confirmation} = payload.user;
    const {history} = payload
    console.log('history', history)

    try {
        const registerUser = yield call(registerWithEmailPasswordAsync, email, password, password_confirmation);

        console.log(registerUser)
        console.log('registerUser id', registerUser.data.id)

        if (registerUser.data) {
            localStorage.setItem('user_id', registerUser.data.id);
            localStorage.setItem('user', JSON.stringify(registerUser.data));
            alert('Success')
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

export function* watchLogoutUser() {
    yield takeEvery(LOGOUT_USER, logout);
}

const logoutAsync = async (history) => {
    await FactoryService.request('AuthService').logout().then(authUser => authUser).catch(error => error);
    history.push('/')
}

function* logout({payload}) {
    const {history} = payload
    try {
        yield call(logoutAsync, history);
        localStorage.removeItem('user_id');
    } catch (error) {
    }
}

export function* watchForgotPassword() {
    yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

const forgotPasswordAsync = async (email) => {
    return await FactoryService.request('AuthService').forgot(email)
        .then(user => user)
        .catch(error => error);
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

export function* watchResetPassword() {
    yield takeEvery(RESET_PASSWORD, resetPassword);
}

const resetPasswordAsync = async (resetPasswordCode, newPassword) => {
    return await FactoryService.request('AuthService').reset(resetPasswordCode, newPassword)
        .then(user => user)
        .catch(error => error);
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

export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogoutUser),
        fork(watchRegisterUser),
        fork(watchForgotPassword),
        fork(watchResetPassword),
    ]);
}
//
// function* a() {
//     yield 'redux-saga'
//     yield 'redux-xxx'
//     return "xxx"
// }
//
// function* b() {
//     yield 'a'
//     yield 'b'
//     yield * a()
//     yield 'c'
//     return "7777"
// }
//
// const x = b();
//
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())
// console.log(x.next())
