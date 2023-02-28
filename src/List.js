import React, { Component } from "react";

class List extends Component {
  state = { taskList: [] };

  onInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  onClick = () => {
    this.setState({ teskList: [...this.state.taskList, this.state.userInput] });
  };
  render() {
    return (
      <>
        <input type="text" onInput={this.onInput} />
        <button onClick={this.onClick}>Add tasklist</button>
        <ul>
          {this.state.taskList.map((item) => (
            <li>(item)</li>
          ))}
        </ul>
      </>
    );
  }
}

export default List;
