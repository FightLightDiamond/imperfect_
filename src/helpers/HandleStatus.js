import {put} from "redux-saga/effects";
import {logoutUser} from "../stores/redux/auth/actions";

const handleStatus = (status, history) => {

    console.log(status, history)
    switch (status) {
        case 401:
            localStorage.removeItem('users')
            put(logoutUser(history))
            history.push('/login')

            break;
        case 500: alert('Server Error')
            break
        default:
    }
}

export default handleStatus