const initialState = {
    number: 2
}

const reducerNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE_NUMBER":
            return {
                ...state,
                number: state.number + 1
            }
        case "DECREASE_NUMBER":
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return {
                number: state.number,
            }
    }
}

export default reducerNumber;