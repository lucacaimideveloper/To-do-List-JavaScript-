import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      { name: "clean car", done: false }, //done is refer to the stete
      { name: "clean house", done: true },
      { name: "study", done: true },
    ],
  };

  onInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  onAdd = () => {
    //check the user entered smtg
    if (!this.state.userInput || this.state.userInput.length < 3) {
      return;
    }
    //defensive check if exist ignor it
    const result = this.state.todos.some((item) => {
      return item.name === this.state.userInput;
    }); //arr method over todos state

    if (result) {
      return;
    } // if u found it keep it

    //copy iser input unto the todos array
    const todo = { done: false, name: this.state.userInput }; //biuld obj
    this.setState({ todos: [...this.state.todos, todo] }); // update the old todo list, become new arr, and add ur new todo
  };

  onToggle = (name) => {
    const index = this.state.todos.findIndex((todo) => todo.name === name);

    const todos = [...this.state.todos];

    todos[index].done = !todos[index].done; // i can swap from t to f

    this.setState({ todos }); // I change the state o
  };

  onDelete = (name) => {
    // delete from index is not the best option becuase it create confusion in the code
    //remove an item with splic

    const index = this.state.todos.findIndex((todo) => todo.name === name); // so we find the index of what we want to delete and from it we will splice
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos }); // new state define in base of the function
  };
  render() {
    return (
      <>
        {/* user input controls */}
        <div className="controls">
          <input onInput={this.onInput} type="text" />
          <button onClick={this.onAdd}>Add</button>
        </div>
        {/**this is the code for create display, map over the state obj */}
        {this.state.todos.map((todo) => (
          <div
            className={
              todo.done === true ? "done todoItem" : "undone todoItem"
            }>
            <p>{todo.name}</p>
            <button onClick={() => this.onToggle(todo.name)}>
              {todo.done ? "done" : "undone"}
            </button>
            <button onClick={() => this.onDelete(todo.name)}>delete</button>
            {/**every time u see this.onClick is the action this.onDelete call back function */}
          </div>
        ))}
      </>
    );
  }
}

export default App;
