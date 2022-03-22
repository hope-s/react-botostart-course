import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: [],
    };
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelSubmit(e){
    e.preventDefault();
    if(this.state.text.length === 0){
      return 
    }

    const newItems = {
      text: this.state.text,
      id: Date.now()
    }

    this.setState((prev)=>({
      items: prev.items.concat(newItems),
      text: ""
    }))
    console.log(this.state)
  }
  
  handelChange(event) {
    this.setState({ text: event.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handelChange}
          />
          <button>Add</button>
        </form>
        <ul>
          {this.state.items.map((item, id) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}
