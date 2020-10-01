import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGIN_ADMIN_SUCCESS,
    LOGIN_ADMIN_ERROR,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGOUT_USER,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR,
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR
} from '../actions';
import {checkAuthenticated, destroyAuth} from "../../../helpers/Authentication";
import Auth from "../../../config/Auth";
const INIT_STATE = {
    isUser: checkAuthenticated(Auth.USER_PROVIDER),
    isAdmin: checkAuthenticated(Auth.ADMIN_PROVIDER),
    user: null,
    admin: null,
    forgotUserMail: '',
    newPassword: '',
    resetPasswordCode: '',
    loading: false,
    error: ''
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loading: true, error: ''};
        case LOGIN_USER_SUCCESS:
            alert(LOGIN_USER_SUCCESS)
            return {...state, loading: false, user: action.payload.user, error: '', isUser: true};
        case LOGIN_USER_ERROR:
            alert(LOGIN_USER_ERROR)
            return {...state, loading: false, user: '', isUser: false, error: action.payload.error};
        case LOGIN_ADMIN_SUCCESS:
            alert(LOGIN_ADMIN_SUCCESS)
            return {...state, loading: false, admin: action.payload.user, error: '', isAdmin: true};
        case LOGIN_ADMIN_ERROR:
            alert(LOGIN_ADMIN_ERROR)
            return {...state, loading: false, admin: '', isAdmin: false, error: action.payload.error};

        case FORGOT_PASSWORD:
            return {...state, loading: true, error: ''};
        case FORGOT_PASSWORD_SUCCESS:
            return {...state, loading: false, forgotUserMail: action.payload, error: ''};
        case FORGOT_PASSWORD_ERROR:
            return {...state, loading: false, forgotUserMail: '', error: action.payload.error};

        case RESET_PASSWORD:
            return {...state, loading: true, error: ''};
        case RESET_PASSWORD_SUCCESS:
            return {...state, loading: false, newPassword: action.payload, resetPasswordCode: '', error: ''};
        case RESET_PASSWORD_ERROR:
            return {...state, loading: false, newPassword: '', resetPasswordCode: '', error: action.payload.error};

        case REGISTER_USER:
            return { ...state, loading: true, error: '' };
        case REGISTER_USER_SUCCESS:
            alert('REGISTER_USER_SUCCESS')
            return {...state, loading: false, user: action.payload.user, error: '', isUser: true};
        case REGISTER_USER_ERROR:
            alert('REGISTER_USER_ERROR')
            return {...state, loading: false, user: '', error: action.payload.error};

        case LOGOUT_USER:
            destroyAuth('users')
            return {...state, user: null, isUser: false};
        default:
            return {...state};
    }
}
