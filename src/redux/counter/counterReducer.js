const initialState = {
    counter: 2
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE":
            return {
                ...state,
                counter: state.counter + 1
            }
            default:
                return {
                    counter: state.counter,
                }
    }
}

export default reducer;