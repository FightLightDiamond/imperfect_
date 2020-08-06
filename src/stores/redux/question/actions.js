export const GET_QUESTION = 'GET_QUESTION'
export const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS'
export const GET_QUESTION_ERROR = 'GET_QUESTION_ERROR'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS'
export const GET_QUESTIONS_ERROR = 'GET_QUESTIONS_ERROR'
export const CREATE_QUESTION = 'CREATE_QUESTION'
export const CREATE_QUESTION_ERROR = 'CREATE_QUESTION_ERROR'
export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS'
export const UPDATE_QUESTION = 'UPDATE_QUESTION'
export const UPDATE_QUESTION_ERROR = 'UPDATE_QUESTION_ERROR'
export const UPDATE_QUESTION_SUCCESS = 'UPDATE_QUESTION_SUCCESS'
export const DELETE_QUESTION = 'DELETE_QUESTION'
export const DELETE_QUESTION_ERROR = 'DELETE_QUESTION_ERROR'
export const DELETE_QUESTION_SUCCESS = 'DELETE_QUESTION_SUCCESS'


export const getQuestionAction = (id) => ({
    type: GET_QUESTION,
    payload: {id}
});

export const getQuestionSuccessAction = (lesson) => ({
    type: GET_QUESTION_SUCCESS,
    payload: {lesson}
});

export const getQuestionErrorAction = (error) => ({
    type: GET_QUESTION_ERROR,
    payload: {error}
});

export const getQuestionsAction = (filter) => ({
    type: GET_QUESTIONS,
    payload: {filter}
});

export const getQuestionsSuccessAction = (lessons) => ({
    type: GET_QUESTIONS_SUCCESS,
    payload: {lessons}
});

export const getQuestionsErrorAction = (error) => ({
    type: GET_QUESTIONS_ERROR,
    payload: {error}
});

export const createQuestionAction = (lesson) => ({
    type: CREATE_QUESTION,
    payload: {lesson}
});

export const createQuestionErrorAction = (lesson) => ({
    type: CREATE_QUESTION_ERROR,
    payload: {lesson}
});

export const createQuestionSuccessAction = (lesson) => ({
    type: CREATE_QUESTION_SUCCESS,
    payload: {lesson}
});

export const updateQuestionAction = (id, lesson) => ({
    type: UPDATE_QUESTION,
    payload: {id, lesson}
});

export const updateQuestionSuccessAction = (lesson) => ({
    type: UPDATE_QUESTION_SUCCESS,
    payload: {lesson}
});

export const updateQuestionErrorAction = (error) => ({
    type: UPDATE_QUESTION_ERROR,
    payload: {error}
});

export const destroyQuestionAction = (id) => ({
    type: DELETE_QUESTION,
    payload: {id}
});

export const destroyQuestionErrorAction = (error) => ({
    type: DELETE_QUESTION_ERROR,
    payload: {error}
});

export const destroyQuestionSuccessAction = (lesson) => ({
    type: DELETE_QUESTION_SUCCESS,
    payload: {lesson}
});
