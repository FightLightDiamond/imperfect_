import {call, put} from 'redux-saga/effects';

import {
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

import FactoryService from "../../services/FactoryService";
import handleStatus from "../../../helpers/HandleStatus"

function* index({payload}) {
    const {filter, history} = payload

    try {
        const res = yield call(FactoryService.request('LessonService').index, filter);

        handleStatus(res.status, history)

        if (res.status !== 200)
            yield put(getLessonsErrorAction(res.statusText))
        else
            yield put(getLessonsSuccessAction(res.data));

    } catch (error) {
        yield put(getLessonsErrorAction(error));
    }
}

function* find({payload}) {
    const {id, history} = payload;

    try {
        const res = yield call(FactoryService.request('LessonService').show, id);
        handleStatus(res.status, history)

        if (res.status !== 200)
            yield put(getLessonErrorAction(res.statusText))
        else
            yield put(getLessonSuccessAction(res.data));

    } catch (error) {
        yield put(getLessonSuccessAction(error));
    }
}

function* create({payload}) {
    const {lesson, history} = payload;

    try {
        const res = yield call(FactoryService.request('LessonService').create, lesson);

        handleStatus(res.status, history)

        if (res.status === 200) {
            yield put(createLessonSuccessAction(res.data));
        } else {
            yield put(createLessonErrorAction(res.statusText));
        }
    } catch (error) {
        yield put(createLessonErrorAction(error));
    }
}

function* update({payload}) {
    const {id, lesson, history} = payload;

    try {
        const res = yield call(FactoryService.request('LessonService').update, id, lesson);
        handleStatus(res.status, history)

        if (res.status === 200) {
            yield put(updateLessonSuccessAction(res.data));
        } else {
            yield put(updateLessonErrorAction(res));
        }
    } catch (error) {
        yield put(updateLessonErrorAction(error));
    }
}

function* destroy({payload}) {
    const {id, history} = payload;

    try {
        const res = yield call(FactoryService.request('LessonService').destroy, id);
        handleStatus(res.status, history)

        if (res.status === 200) {
            yield put(destroyLessonSuccessAction(res));
        } else {
            yield put(destroyLessonErrorAction(res.data));
        }
    } catch (error) {
        yield put(destroyLessonErrorAction(error));
    }
}

export {find, index, create, update, destroy}
