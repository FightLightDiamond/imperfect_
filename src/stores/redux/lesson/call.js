import {call, put} from 'redux-saga/effects';
import {
    getLessonAsync,
    getLessonsAsync,
    createLessonAsync,
    updateLessonAsync,
    destroyLessonAsync
} from './api'

import {
    getLessonsAction,
    getLessonErrorAction,
    getLessonSuccessAction,
    getLessonsErrorAction,
    getLessonsSuccessAction,
    createLessonErrorAction,
    createLessonSuccessAction,
    updateLessonSuccessAction,
    updateLessonErrorAction,
    destroyLessonSuccessAction,
    destroyLessonErrorAction,
} from './actions';

function* index({payload}) {
    console.log('payload', payload)
    const {filter} = payload

    try {
        const res = yield call(getLessonsAsync, filter);
        console.log('res show', res)

        if (res.status !== 200)
            yield put(getLessonsErrorAction(res.statusText))
        else
            yield put(getLessonsSuccessAction(res.data));

    } catch (error) {
        console.log('error', error)
        yield put(getLessonsErrorAction(error));
    }
}

function* find({payload}) {
    console.log('payload', payload)

    const {id} = payload;

    try {
        const res = yield call(getLessonAsync, id);
        console.log('res show', res)

        if (res.status !== 200)
            yield put(getLessonErrorAction(res.statusText))
        else
            yield put(getLessonSuccessAction(res.data));

    } catch (error) {
        console.log('error', error)
        yield put(getLessonSuccessAction(error));
    }
}

function* create({payload}) {
    const {lesson} = payload;

    try {
        const res = yield call(createLessonAsync, lesson);

        if (res.status === 200) {
            yield put(createLessonSuccessAction(res.data));
        } else {
            yield put(createLessonErrorAction(res.statusText));
        }
    } catch (error) {
        console.log('error', error)
        yield put(createLessonErrorAction(error));
    }
}

function* update({payload}) {
    const {id, lesson} = payload;

    try {
        const res = yield call(updateLessonAsync, id, lesson);
        console.log('RES', res)
        if (res.status === 200) {
            yield put(updateLessonSuccessAction(res.data));
        } else {
            yield put(updateLessonErrorAction(res));
        }
    } catch (error) {
        console.log(error)
        yield put(updateLessonErrorAction(error));
    }
}

function* destroy({payload}) {
    const {id} = payload;

    try {
        yield call(destroyLessonAsync, id);
        yield put(getLessonsAction());
        yield put(destroyLessonSuccessAction());
    } catch (error) {
        console.log(error)
        yield put(destroyLessonErrorAction(error));
    }
}

export {find, index, create, update, destroy}
