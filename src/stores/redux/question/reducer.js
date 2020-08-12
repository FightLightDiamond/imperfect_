import {
    GET_QUESTION,
    GET_QUESTION_ERROR,
    GET_QUESTION_SUCCESS,
    GET_QUESTIONS_ERROR,
    GET_QUESTIONS,
    GET_QUESTIONS_SUCCESS,
    CREATE_QUESTION,
    CREATE_QUESTION_ERROR,
    CREATE_QUESTION_SUCCESS,
    UPDATE_QUESTION,
    UPDATE_QUESTION_ERROR,
    UPDATE_QUESTION_SUCCESS,
    DELETE_QUESTION,
    DELETE_QUESTION_SUCCESS,
    DELETE_QUESTION_ERROR,
    TEST_SINGLE,
    TEST_SINGLE_ERROR,
    TEST_SINGLE_SUCCESS
} from './actions';

import {toast} from 'react-toastify';

const INIT_STATE = {
    questions: [],
    question: {},
    loading: true,
    error: '',
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_QUESTION:
            return {...state, loading: true, error: ''};
        case GET_QUESTION_ERROR:
            toast(GET_QUESTION_ERROR)
            return {...state, loading: false, error: action.payload.error}
        case GET_QUESTION_SUCCESS:
            // toast(GET_QUESTION_SUCCESS)
            return {...state, question: action.payload.question, loading: false, error: ''}

        case GET_QUESTIONS:
            return {...state, loading: true, error: ''};
        case GET_QUESTIONS_ERROR:
            // toast(GET_QUESTIONS_ERROR)
            return {...state, loading: false, error: action.payload.error}
        case GET_QUESTIONS_SUCCESS:
            toast(GET_QUESTIONS_SUCCESS)
            return {...state, questions: action.payload.questions, loading: false, error: ''}

        case CREATE_QUESTION:
            return {...state, loading: true, error: ''};
        case CREATE_QUESTION_ERROR:
            toast(CREATE_QUESTION_ERROR)
            return {...state, loading: false, error: action.payload.error}
        case CREATE_QUESTION_SUCCESS:
            toast(CREATE_QUESTION_SUCCESS)
            return {...state, question: action.payload.question, loading: false, error: ''}

        case UPDATE_QUESTION:
            return {...state, loading: true, error: ''};
        case UPDATE_QUESTION_ERROR:
            toast(UPDATE_QUESTION_ERROR)
            return {...state, loading: false, error: action.payload.error}
        case UPDATE_QUESTION_SUCCESS:
            toast.success(UPDATE_QUESTION_SUCCESS, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });

            // const {id, title, intro, content} = action.payload.question;
            //
            // const questions = state.questions.map(item => (item.id == id) ? {
            //     ...item, title: title, intro: intro, content: content
            // } : item);

            // console.log('questions', questions)

            return {...state, question: action.payload.question, loading: false, error: ''}

        case DELETE_QUESTION:
            return {...state, loading: true, error: ''}
        case DELETE_QUESTION_ERROR:
            toast(DELETE_QUESTION_ERROR)
            return {...state, loading: false, error: action.payload.error}
        case DELETE_QUESTION_SUCCESS:
            toast(DELETE_QUESTION_SUCCESS)
            return {...state, loading: false, error: ''}
        case TEST_SINGLE:
            return {...state, loading: true, error: ''}
        case TEST_SINGLE_ERROR:
            toast.error(TEST_SINGLE_ERROR)
            return {...state, loading: false, error: action.payload.error}
        case TEST_SINGLE_SUCCESS:
            console.log('TEST_SINGLE_SUCCESS', action.payload.result)
            if( action.payload.result) {
                toast.success('correct')
            } else {
                toast.error('Incorrect')
            }

            return {...state, loading: false, error: ''}

        default:
            return state
    }
}
