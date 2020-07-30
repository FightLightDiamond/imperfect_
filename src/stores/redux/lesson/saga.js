import {all, fork, takeEvery} from 'redux-saga/effects';
import {createLesson, updateLesson, deleteLesson} from './call'
import {
    CREATE_LESSON,
    UPDATE_LESSON,
    DELETE_LESSON,
} from './actions';

function* watchCreateLesson() {
    yield takeEvery(CREATE_LESSON, createLesson);
}

function* watchUpdateLesson() {
    yield takeEvery(UPDATE_LESSON, updateLesson);
}

function* watchDeleteLesson() {
    yield takeEvery(DELETE_LESSON, deleteLesson);
}

export default function* rootSaga() {
    yield all([
        fork(watchCreateLesson),
        fork(watchUpdateLesson),
        fork(watchDeleteLesson),
    ]);
}
