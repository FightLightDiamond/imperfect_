import {
    GET_LESSON,
    GET_LESSON_ERROR,
    GET_LESSON_SUCCESS,
    GET_LESSONS_ERROR,
    GET_LESSONS,
    GET_LESSONS_SUCCESS,
    CREATE_LESSON,
    CREATE_LESSON_ERROR,
    CREATE_LESSON_SUCCESS,
    UPDATE_LESSON,
    UPDATE_LESSON_ERROR,
    UPDATE_LESSON_SUCCESS,
    DELETE_LESSON,
    DELETE_LESSON_SUCCESS,
    DELETE_LESSON_ERROR,
} from './actions';

import {toast } from 'react-toastify';

const INIT_STATE = {
    lessons: [],
    lesson: {
        id: 0,
        title: null,
        intro: null,
        content: null
    },
    loading: false,
    error: '',
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_LESSON:
            return {...state, loading: true, error: ''};
        case GET_LESSON_ERROR:
            toast(GET_LESSON_ERROR)
            return {...state, loading: false, error: action.payload.error}
        case GET_LESSON_SUCCESS:
            // toast(GET_LESSON_SUCCESS)
            return {...state, lesson: action.payload.lesson, loading: false, error: ''}

        case GET_LESSONS:
            return {...state, loading: true, error: ''};
        case GET_LESSONS_ERROR:
            // toast(GET_LESSONS_ERROR)
            return {...state, loading: false, error: action.payload.error}
        case GET_LESSONS_SUCCESS:
            toast(GET_LESSONS_SUCCESS)
            return {...state, lessons: action.payload.lessons, loading: false, error: ''}

        case CREATE_LESSON:
            return {...state, loading: true, error: ''};
        case CREATE_LESSON_ERROR:
            toast(CREATE_LESSON_ERROR)
            return {...state, loading: false, error: action.payload.error}
        case CREATE_LESSON_SUCCESS:
            toast(CREATE_LESSON_SUCCESS)
            return {...state, lesson: action.payload.lesson, loading: false, error: ''}

        case UPDATE_LESSON:
            return {...state, loading: true, error: ''};
        case UPDATE_LESSON_ERROR:
            toast(UPDATE_LESSON_ERROR)
            return {...state, loading: false, error: action.payload.error}
        case UPDATE_LESSON_SUCCESS:
            toast.success(UPDATE_LESSON_SUCCESS, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });

            // const {id, title, intro, content} = action.payload.lesson;
            //
            // const lessons = state.lessons.map(item => (item.id == id) ? {
            //     ...item, title: title, intro: intro, content: content
            // } : item);

            // console.log('lessons', lessons)

            return {...state, lesson: action.payload.lesson, loading: false, error: ''}

        case DELETE_LESSON:
            return {...state, loading: true, error: ''};
        case DELETE_LESSON_ERROR:
            toast(DELETE_LESSON_ERROR)
            return {...state, loading: false, error: action.payload.error}
        case DELETE_LESSON_SUCCESS:
            toast(DELETE_LESSON_SUCCESS)
            return {...state, loading: false, error: ''}

        default:
            return state
    }
}
