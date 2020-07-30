import {
    GET_FILE_LESSON,
    UPDATE_FILE_LESSON_SUCCESS, DELETE_FILE_LESSON_SUCCESS
} from './actions';

const INIT_STATE = {
    files: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_FILE_LESSON:
            return { ...state, files: action.payload.files}
        case UPDATE_FILE_LESSON_SUCCESS:
            alert('Success')
            return { ...state, files: [...state.files, action.payload.fileURL] };
        case DELETE_FILE_LESSON_SUCCESS:
            alert('Success')
            return { ...state, files: [...state.files, action.payload] };
        default: return { ...state, files: [] };
    }
}
