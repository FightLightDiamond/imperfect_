export const GET_LESSON = 'GET_LESSON'
export const GET_LESSON_SUCCESS = 'GET_LESSON_SUCCESS'
export const GET_LESSON_ERROR = 'GET_LESSON_ERROR'
export const GET_LESSONS = 'GET_LESSONS'
export const GET_LESSONS_SUCCESS = 'GET_LESSONS_SUCCESS'
export const GET_LESSONS_ERROR = 'GET_LESSONS_ERROR'
export const CREATE_LESSON = 'CREATE_LESSON'
export const CREATE_LESSON_ERROR = 'CREATE_LESSON_ERROR'
export const CREATE_LESSON_SUCCESS = 'CREATE_LESSON_SUCCESS'
export const UPDATE_LESSON = 'UPDATE_LESSON'
export const UPDATE_LESSON_ERROR = 'UPDATE_LESSON_ERROR'
export const UPDATE_LESSON_SUCCESS = 'UPDATE_LESSON_SUCCESS'
export const DELETE_LESSON = 'DELETE_LESSON'
export const DELETE_LESSON_ERROR = 'DELETE_LESSON_ERROR'
export const DELETE_LESSON_SUCCESS = 'DELETE_LESSON_SUCCESS'


export const getLessonAction = (id, history) => ({
    type: GET_LESSON,
    payload: {id, history}
});

export const getLessonSuccessAction = (lesson, history) => ({
    type: GET_LESSON_SUCCESS,
    payload: {lesson, history}
});

export const getLessonErrorAction = (error) => ({
    type: GET_LESSON_ERROR,
    payload: {error}
});

export const getLessonsAction = (filter, history) => ({
    type: GET_LESSONS,
    payload: {filter, history}
});

export const getLessonsSuccessAction = (lessons) => ({
    type: GET_LESSONS_SUCCESS,
    payload: {lessons}
});

export const getLessonsErrorAction = (error) => ({
    type: GET_LESSONS_ERROR,
    payload: {error}
});

export const createLessonAction = (lesson, history) => ({
    type: CREATE_LESSON,
    payload: {lesson, history}
});

export const createLessonErrorAction = (lesson) => ({
    type: CREATE_LESSON_ERROR,
    payload: {lesson}
});

export const createLessonSuccessAction = (lesson) => ({
    type: CREATE_LESSON_SUCCESS,
    payload: {lesson}
});

export const updateLessonAction = (id, lesson, history) => ({
    type: UPDATE_LESSON,
    payload: {id, lesson, history}
});

export const updateLessonSuccessAction = (lesson) => ({
    type: UPDATE_LESSON_SUCCESS,
    payload: {lesson}
});

export const updateLessonErrorAction = (error) => ({
    type: UPDATE_LESSON_ERROR,
    payload: {error}
});

export const destroyLessonAction = (id, history) => ({
    type: DELETE_LESSON,
    payload: {id, history}
});

export const destroyLessonErrorAction = (error) => ({
    type: DELETE_LESSON_ERROR,
    payload: {error}
});

export const destroyLessonSuccessAction = (lesson) => ({
    type: DELETE_LESSON_SUCCESS,
    payload: {lesson}
});
