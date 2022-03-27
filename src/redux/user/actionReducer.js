import {
    FETCH_USERS_REQUESTS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
} from '../constans';

const initialState = {
    loading: true,
    users: [],
    error: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTS:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer;