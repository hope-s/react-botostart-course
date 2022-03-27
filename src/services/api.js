import axios from "axios";

export const getApi = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/88");
    return response.data
}