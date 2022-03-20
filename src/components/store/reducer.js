import produce from "immer"

export const initState = {
    name: '', //
    age: 0,
    data: [],
}

export const reducer = produce((state, action) => {
    switch (action.type) {
        case "SET_NAME":
            state.name = action.payload;
            break;
        case "SET_AGE":
            state.age = action.payload;
            break;
        case "SET_DATA":
            state.data = action.payload;
            break;
        default:
            return state
    }
}, initState)