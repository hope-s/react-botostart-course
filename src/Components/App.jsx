import React, { Component } from "react";
import Child from "./Child";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: false,
      input: "",
      input2: "",
    };
  }

  componentDidMount() {
    // const api = axios.create({
    //   baseURL: "https://jsonplaceholder.typicode.com",
    //   timeout: 1000,
    // });
    axios
      .all([axios.get("/posts/"), axios.get("users/1/albums/"), axios.get("/users/")])
      .then(
        axios.spread((one, two, three) => {
          this.setState({ data: one });
          console.log(two)
        })
      );
    // axios.get("/posts").then((r) => this.setState({ data: r }));
  }

  del = () => {
    axios.post("/posts", { name: "omid" }).then((r) => console.log(r));
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <button onClick={this.del}>DEL</button>
        {!this.state.error ? (
          data.map((i, index) => (
            <Child
              key={index}
              delete={this.delete}
              body={i.body}
              title={i.title}
            />
          ))
        ) : (
          <h1>oooh Error</h1>
        )}
      </div>
    );
  }
}
