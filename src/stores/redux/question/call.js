import {call, put} from 'redux-saga/effects';

import {
    getQuestionsAction,
    getQuestionErrorAction,
    getQuestionSuccessAction,
    getQuestionsErrorAction,
    getQuestionsSuccessAction,
    createQuestionErrorAction,
    createQuestionSuccessAction,
    updateQuestionSuccessAction,
    updateQuestionErrorAction,
    destroyQuestionSuccessAction,
    destroyQuestionErrorAction,
} from './actions';
import FactoryService from "../../services/FactoryService";

function* index({payload}) {
    console.log('payload', payload)
    const {filter} = payload

    try {
        const res = yield call(FactoryService.request('QuestionService').index, filter);
        console.log('res show', res)

        if (res.status !== 200)
            yield put(getQuestionsErrorAction(res.statusText))
        else
            yield put(getQuestionsSuccessAction(res.data));

    } catch (error) {
        console.log('error', error)
        yield put(getQuestionsErrorAction(error));
    }
}

function* find({payload}) {
    const {id} = payload;

    try {
        const res = yield call(FactoryService.request('QuestionService').show, id);
        console.log('res show', res)

        if (res.status !== 200)
            yield put(getQuestionErrorAction(res.statusText))
        else
            yield put(getQuestionSuccessAction(res.data));

    } catch (error) {
        console.log('error', error)
        yield put(getQuestionSuccessAction(error));
    }
}

function* create({payload}) {
    const {lesson} = payload;

    try {
        const res = yield call(FactoryService.request('QuestionService').create, lesson);

        if (res.status === 200) {
            yield put(createQuestionSuccessAction(res.data));
        } else {
            yield put(createQuestionErrorAction(res.statusText));
        }
    } catch (error) {
        console.log('error', error)
        yield put(createQuestionErrorAction(error));
    }
}

function* update({payload}) {
    const {id, lesson} = payload;

    try {
        const res = yield call(FactoryService.request('QuestionService').update, id, lesson);
        console.log('RES', res)
        if (res.status === 200) {
            yield put(updateQuestionSuccessAction(res.data));
        } else {
            yield put(updateQuestionErrorAction(res));
        }
    } catch (error) {
        console.log(error)
        yield put(updateQuestionErrorAction(error));
    }
}

function* destroy({payload}) {
    const {id} = payload;

    try {
        yield call(FactoryService.request('QuestionService').destroy, id);
        yield put(getQuestionsAction());
        yield put(destroyQuestionSuccessAction());
    } catch (error) {
        console.log(error)
        yield put(destroyQuestionErrorAction(error));
    }
}

export {find, index, create, update, destroy}
