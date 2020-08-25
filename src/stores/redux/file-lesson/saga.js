import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import FactoryService from '../../services/FactoryService';

import {
    UPDATE_FILE_LESSON, DELETE_FILE_LESSON,
    updateFileLessonSuccessAction,
    deleteFileLessonSuccessAction
} from './actions';

export function* watchUpdateFileLesson() {
    yield takeEvery(UPDATE_FILE_LESSON, updateFileLesson);
}

const updateFileLessonAsync = async (id, file) => {
    return await FactoryService.FactoryService.request('FileLessonService')('FileLessonService').update({id, file})
        .then(authUser => authUser)
        .catch(error => error);
}

function* updateFileLesson({payload}) {
    const {id, file} = payload;

    try {
        const res = yield call(updateFileLessonAsync, id, file);

        // if (!res.message) {
            yield put(updateFileLessonSuccessAction(res.user));
        // }
        // else {
        //     yield put(loginUserError(loginUser.message));
        // }
    } catch (error) {
        // yield put(loginUserError(error));
        alert('Error')
    }
}

export function* watchDeleteFileLesson() {
    yield takeEvery(DELETE_FILE_LESSON, deleteFileLesson);
}

const deleteFileLessonAsync = async (payload) =>
    await FactoryService.request('FileLessonService').delete(payload)
        .then(authUser => authUser)
        .catch(error => error);

function* deleteFileLesson({payload}) {
    try {
        const registerUser = yield call(deleteFileLessonAsync, payload);
        // if (!registerUser.message) {

            yield put(deleteFileLessonSuccessAction(registerUser));
        // } else {
        //     // yield put(registerUserError(registerUser.message));
        // }
    } catch (error) {
        alert('313131')
        // yield put(registerUserError(error));
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchUpdateFileLesson),
        fork(watchDeleteFileLesson),
    ]);
}
