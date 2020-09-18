import {call, put} from 'redux-saga/effects';

import {
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
import handleStatus from "../../../helpers/HandleStatus"

function* index({payload}) {
    const {filter, history} = payload

    try {
        const res = yield call(FactoryService.request('QuestionService').index, filter);
        console.log('res show', res)
        handleStatus(res.status, history)

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
    const {id, history} = payload;

    try {
        const res = yield call(FactoryService.request('QuestionService').show, id);
        console.log('res show', res)
        handleStatus(res.status, history)
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
    const {question, history} = payload;

    try {
        const res = yield call(FactoryService.request('QuestionService', 'admin').create, question);
        console.log(res)
        console.log(res.status)
        console.log('res.code', res.code)
        console.log('res.code', res.statusText)
        handleStatus(res.status, history)

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
    const {id, question, history} = payload;

    try {
        const res = yield call(FactoryService.request('QuestionService').update, id, question);
        console.log('RES', res)
        handleStatus(res.status, history)
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
    const {id, history} = payload;

    try {
        const res = yield call(FactoryService.request('QuestionService').destroy, id);
        handleStatus(res.status, history)

        if (res.status === 200) {
            yield put(destroyQuestionSuccessAction());
        } else {
            yield put(destroyQuestionErrorAction(res.statusText));
        }
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
