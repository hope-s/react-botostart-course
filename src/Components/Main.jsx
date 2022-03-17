import React, { Component } from "react";

export default class Main extends Component {
  constructor() {
    super();
    this.state = { option: "option3", text: "value" };
  }

  handelChange = (e) => {
    const { value } = e.target;
    this.setState({
      option: value,
    });
  };

  handelChange2 = (e) => {
    const { value } = e.target;
    this.setState({
      text: value,
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.option);
    console.log(this.state.text);
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <h1>{this.state.option}</h1>
        <select value={this.state.option} onChange={this.handelChange}>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
        </select>
        <br />
        <input value={this.state.text} onChange={this.handelChange2} />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
