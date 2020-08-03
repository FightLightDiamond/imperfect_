import {all, fork, takeEvery, takeLatest} from 'redux-saga/effects';
import {login, register, logout, forgotPassword, resetPassword} from './call'
import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    FORGOT_PASSWORD,
    RESET_PASSWORD,
} from '../actions';

export function* watchLogin() {
    yield takeEvery(LOGIN_USER, login);
}

export function* watchRegister() {
    yield takeLatest(REGISTER_USER, register);
}

export function* watchLogout() {
    yield takeEvery(LOGOUT_USER, logout);
}

export function* watchForgotPassword() {
    yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}

export function* watchResetPassword() {
    yield takeEvery(RESET_PASSWORD, resetPassword);
}

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchRegister),
        fork(watchForgotPassword),
        fork(watchResetPassword),
    ]);
}
