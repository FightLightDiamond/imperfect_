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

export const getQuestionSuccessAction = (question) => ({
    type: GET_QUESTION_SUCCESS,
    payload: {question}
});

export const getQuestionErrorAction = (error) => ({
    type: GET_QUESTION_ERROR,
    payload: {error}
});

export const getQuestionsAction = (filter) => ({
    type: GET_QUESTIONS,
    payload: {filter}
});

export const getQuestionsSuccessAction = (questions) => ({
    type: GET_QUESTIONS_SUCCESS,
    payload: {questions}
});

export const getQuestionsErrorAction = (error) => ({
    type: GET_QUESTIONS_ERROR,
    payload: {error}
});

export const createQuestionAction = (question) => ({
    type: CREATE_QUESTION,
    payload: {question}
});

export const createQuestionErrorAction = (question) => ({
    type: CREATE_QUESTION_ERROR,
    payload: {question}
});

export const createQuestionSuccessAction = (question) => ({
    type: CREATE_QUESTION_SUCCESS,
    payload: {question}
});

export const updateQuestionAction = (id, question) => ({
    type: UPDATE_QUESTION,
    payload: {id, question}
});

export const updateQuestionSuccessAction = (question) => ({
    type: UPDATE_QUESTION_SUCCESS,
    payload: {question}
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

export const destroyQuestionSuccessAction = (question) => ({
    type: DELETE_QUESTION_SUCCESS,
    payload: {question}
});
