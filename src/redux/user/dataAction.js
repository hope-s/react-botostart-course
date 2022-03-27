import axios from 'axios';
import {
    FETCH_USERS_REQUESTS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED,
} from '../constans';

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTS
    }
}

const fetchUsersSeccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFiled = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

export const fetchUsers = (url) => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.get(url).then(response => {
            let data = response.data;
            dispatch(fetchUsersSeccess(data))
        }).catch(error => {
            let errorMessage = error.message;
            dispatch(fetchUsersFiled(errorMessage))
        })
    }
}