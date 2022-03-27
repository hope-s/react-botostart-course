const initialState = {
    number: 2,
    data: []
}

const reducerNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE_NUMBER":
            return {
                ...state,
                number: state.number + action.payload
            }
        case "DECREASE_NUMBER":
            return {
                ...state,
                number: state.number - 1
            }
        case "SET_DATA":
            return {
                ...state,
                data: [action.payload]
            }
        default:
            return {
                number: state.number,
            }
    }
}

export default reducerNumber;