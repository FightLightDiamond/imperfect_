export const CREATE_LESSON = 'CREATE_LESSON'
export const CREATE_LESSON_ERROR = 'CREATE_LESSON_ERROR'
export const CREATE_LESSON_SUCCESS = 'CREATE_LESSON_SUCCESS'
export const UPDATE_LESSON = 'UPDATE_LESSON'
export const GET_LESSON = 'GET_LESSON'
export const UPDATE_LESSON_ERROR = 'UPDATE_LESSON_ERROR'
export const UPDATE_LESSON_SUCCESS = 'UPDATE_LESSON_SUCCESS'
export const DELETE_LESSON = 'DELETE_LESSON'
export const DELETE_LESSON_ERROR = 'DELETE_LESSON_ERROR'
export const DELETE_LESSON_SUCCESS = 'DELETE_LESSON_SUCCESS'

export const createLessonAction = (lesson) => ({
    type: CREATE_LESSON,
    payload: lesson
});

export const createLessonErrorAction = (lesson) => ({
    type: CREATE_LESSON_ERROR,
    payload: lesson
});

export const createLessonSuccessAction = (lesson) => ({
    type: CREATE_LESSON_SUCCESS,
    payload: {lesson}
});

export const getLessonAction = (lesson) => ({
    type: GET_LESSON,
    payload: lesson
});

export const updateLessonAction = (id, data) => ({
    type: UPDATE_LESSON,
    payload: {id, data}
});

export const updateLessonSuccessAction = (lessonURL) => ({
    type: UPDATE_LESSON_SUCCESS,
    payload: {lessonURL}
});

export const updateLessonErrorAction = (e) => ({
    type: UPDATE_LESSON_ERROR,
    payload: {e}
});

export const deleteLessonAction = (id) => ({
    type: DELETE_LESSON,
    payload: {id}
});

export const deleteLessonErrorAction = (id) => ({
    type: DELETE_LESSON_ERROR,
    payload: {id}
});

export const deleteLessonSuccessAction = (id) => ({
    type: DELETE_LESSON_SUCCESS,
    payload: {id}
});
