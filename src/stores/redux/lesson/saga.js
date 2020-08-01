import {all, fork, takeEvery} from 'redux-saga/effects';
import {create, find, index, update, destroy} from './call'
import {
    CREATE_LESSON,
    GET_LESSON,
    GET_LESSONS,
    UPDATE_LESSON,
    DELETE_LESSON,
} from './actions';

function* watchCreate() {
    yield takeEvery(CREATE_LESSON, create);
}

function* watchGet() {
    yield takeEvery(GET_LESSON, find);
}

function* watchGets() {
    yield takeEvery(GET_LESSONS, index);
}

function* watchUpdate() {
    yield takeEvery(UPDATE_LESSON, update);
}

function* watchDelete() {
    yield takeEvery(DELETE_LESSON, destroy);
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
