import {all, fork, takeEvery} from 'redux-saga/effects';
import {create, find, index, update, destroy} from './call'
import {
    CREATE_QUESTION,
    GET_QUESTION,
    GET_QUESTIONS,
    UPDATE_QUESTION,
    DELETE_QUESTION,
} from './actions';

function* watchCreate() {
    yield takeEvery(CREATE_QUESTION, create);
}

function* watchGet() {
    yield takeEvery(GET_QUESTION, find);
}

function* watchGets() {
    yield takeEvery(GET_QUESTIONS, index);
}

function* watchUpdate() {
    yield takeEvery(UPDATE_QUESTION, update);
}

function* watchDelete() {
    yield takeEvery(DELETE_QUESTION, destroy);
}

export default function* rootSaga() {
    yield all([
        fork(watchCreate),
        fork(watchGet),
        fork(watchGets),
        fork(watchUpdate),
        fork(watchDelete),
    ]);
}
