import {call, put} from 'redux-saga/effects';
import {createLessonAsync, updateLessonAsync, deleteLessonAsync} from './api'

import {
    createLessonErrorAction,
    createLessonSuccessAction,
    updateLessonSuccessAction,
    updateLessonErrorAction,
    deleteLessonSuccessAction,
    deleteLessonErrorAction,
} from './actions';

function* createLesson({payload}) {
    console.log('payload', payload)

    const {lesson} = payload;

    try {
        const res = yield call(createLessonAsync, lesson);
        console.log('res create', res)
        // if (!res.message) {
        yield put(createLessonSuccessAction(res.data));
        // }
        // else {
        //     yield put(loginUserError(loginUser.message));
        // }
    } catch (error) {
        console.log('error', error)
        yield put(createLessonErrorAction(error));
    }
}

function* updateLesson({payload}) {
    const {id, file} = payload;

    try {
        const res = yield call(updateLessonAsync, id, file);

        // if (!res.message) {
        yield put(updateLessonSuccessAction(res.data));
        // }
        // else {
        //     yield put(loginUserError(loginUser.message));
        // }
    } catch (error) {
        yield put(updateLessonErrorAction(error));
    }
}

function* deleteLesson({payload}) {
    try {
        const registerUser = yield call(deleteLessonAsync, payload);
        // if (!registerUser.message) {

        yield put(deleteLessonSuccessAction(registerUser));
        // } else {
        //     // yield put(registerUserError(registerUser.message));
        // }
    } catch (error) {
        yield put(deleteLessonErrorAction(error));
    }
}

export {createLesson, updateLesson, deleteLesson}
