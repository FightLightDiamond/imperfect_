import {
    // CREATE_LESSON,
    CREATE_LESSON_SUCCESS,
    GET_LESSON,
    UPDATE_LESSON_ERROR,
    UPDATE_LESSON_SUCCESS,
    DELETE_LESSON_SUCCESS, DELETE_LESSON_ERROR, CREATE_LESSON_ERROR
} from './actions';

const INIT_STATE = {
    lesson: {
        id: 0
    }
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        // case CREATE_LESSON:
        //     alert('CREATE_LESSON')
        //     return {...state, lesson: action.payload.lesson}
        case CREATE_LESSON_ERROR:
            alert(CREATE_LESSON_ERROR)
            return state
        case CREATE_LESSON_SUCCESS:
            alert(CREATE_LESSON_SUCCESS)
            console.log('action.payload CREATE_LESSON_SUCCESS', action.payload)
            return {...state, lesson: action.payload.lesson}
        case GET_LESSON:
            return {...state, lesson: action.payload.lesson}
        case UPDATE_LESSON_ERROR:
            alert('UPDATE_LESSON_ERROR')
            return state
        case UPDATE_LESSON_SUCCESS:
            alert('UPDATE_LESSON_SUCCESS')
            return {...state, lesson: [...state.lesson, action.payload.fileURL]}
        case DELETE_LESSON_ERROR:
            alert('DELETE_LESSON_ERROR')
            return state
        case DELETE_LESSON_SUCCESS:
            alert('DELETE_LESSON_SUCCESS')
            return {...state, lesson: [...state.lesson, action.payload]}
        default:
            return state
    }
}
