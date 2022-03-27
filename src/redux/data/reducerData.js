const initialState = {
    data: []
}

const reducerData = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                data: action.payload
            }
        default:
            return {
                data: state.data,
            }
    }
}

export default reducerData;