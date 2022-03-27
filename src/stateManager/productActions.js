import axios from "axios";

const requestData = () => {
    return {
        type: "REQUEST_DATA"
    }
}

const fetchDataSuccess = (products) => {
    return {
        type: "FETCH_DATA_SECCESS",
        payload: products
    }
}

const fetchDtataFiled = (error) => {
    return {
        type: "FETCH_DATA_FILED",
        payload: error
    }
}

export const getProducts = () => {
    return (dispatch) => {
        dispatch(requestData())
        axios.get('https://fakestoreapi.com/products').then((response) => {
            let data = response.data
            dispatch(fetchDataSuccess(data))
        }).catch((error) => {
            let errorMessage = error.message
            dispatch(fetchDtataFiled(errorMessage))
        })
    }
}