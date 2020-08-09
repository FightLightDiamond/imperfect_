import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import fileLessonSagas from './file-lesson/saga'
import lessonSagas from './lesson/saga'
import questionSagas from './question/saga'
// import todoSagas from './todo/saga';
// import chatSagas from './chat/saga';
// import surveyListSagas from './surveyList/saga';
// import surveyDetailSagas from './surveyDetail/saga';



export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    fileLessonSagas(),
    lessonSagas(),
    questionSagas()
    // todoSagas(),
    // chatSagas(),
    // surveyListSagas(),
    // surveyDetailSagas()
  ]);
}
