import axios from "axios";

export class PostsAPI {
  fetchPosts = () => {
    return new Promise(function (resolve, reject) {
      const url = "https://jsonplaceholder.typicode.com/posts"
      axios.get(url)
        .then((response) => {
          resolve(response.data)
        })
        .catch(error => reject(error.message))
    })
  }
}