import {all, fork, takeEvery} from 'redux-saga/effects';
import {create, find, index, update, destroy, testSingle} from './call'
import {
    CREATE_QUESTION,
    GET_QUESTION,
    GET_QUESTIONS,
    UPDATE_QUESTION,
    DELETE_QUESTION,
    TEST_SINGLE
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

function* watchTestSingle() {
    yield takeEvery(TEST_SINGLE, testSingle);
}

export default function* rootSaga() {
    yield all([
        fork(watchCreate),
        fork(watchGet),
        fork(watchGets),
        fork(watchUpdate),
        fork(watchDelete),
        fork(watchTestSingle),
    ]);
}
