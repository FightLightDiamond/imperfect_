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
    testSingleErrorAction,
    testSingleSuccessAction
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
    const {question} = payload;

    try {
        const res = yield call(FactoryService.request('QuestionService', 'admin').create, question);

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
    const {id, question} = payload;

    try {
        const res = yield call(FactoryService.request('QuestionService').update, id, question);
        console.log('RES', res)
        if (res.status === 200) {
            yield put(updateQuestionSuccessAction(res.data));
        } else {
            yield put(updateQuestionErrorAction(res.statusText));
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

function* testSingle({payload}) {
    const {id, answer} = payload;

    try {
        const res = yield call(FactoryService.request('QuestionService').testSingle, id, answer);
        console.log('testSingle', res)
        if (res.status === 200) {
            yield put(testSingleSuccessAction(res.data));
        } else {
            yield put(testSingleErrorAction(res.statusText));
        }
    } catch (error) {
        console.log(error)
        yield put(testSingleErrorAction(error));
    }
}

export {find, index, create, update, destroy, testSingle}
