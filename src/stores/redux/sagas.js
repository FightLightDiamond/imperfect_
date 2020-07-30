import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import fileLessonSages from './file-lesson/saga'
import lessonSages from './lesson/saga'
// import todoSagas from './todo/saga';
// import chatSagas from './chat/saga';
// import surveyListSagas from './surveyList/saga';
// import surveyDetailSagas from './surveyDetail/saga';



export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    fileLessonSages(),
    lessonSages(),
    // todoSagas(),
    // chatSagas(),
    // surveyListSagas(),
    // surveyDetailSagas()
  ]);
}
