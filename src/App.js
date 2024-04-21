import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "./components/Data/Data.jsx";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/`
    );
    const limitTodos = data.slice(0, 10);
    setTodos(limitTodos);
  };
  useEffect(() => {
    getApiData();
  }, []);

  const onInput = (e) => {
    setUserInput(e.target.value);
    // console.log(setUserInput(), e.target.value);
  };

  const onAdd = () => {
    if (!userInput || userInput.length < 3) {
      return;
    }

    let idCounter = Date.now();

    const newTodo = {
      id: idCounter++,
      title: userInput,
      completed: false,
    };
    todos.unshift(newTodo);
    // setTodos([...todos, newTodo]);
    setUserInput("");
  };

  const onToggle = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);

    const _todos = [...todos];

    _todos[index].completed = !_todos[index].completed; // i can swap from t to f !will invert the boolean

    setTodos(_todos);
  };

  const onDelete = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    // so we find the index of what we want to delete and from it we will splice
    const _todos = [...todos];
    //
    _todos.splice(index, 1);
    //
    setTodos(_todos);
  };

  const onSaveEdit = (id, title) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const _todos = [...todos];
    _todos[index].title = title;
    setTodos(_todos);
  };
  const sortTodos = (order) => {
    const sortedTodos = [...todos].sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      if (order === "asc") {
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
      } else {
        if (titleA > titleB) return -1;
        if (titleA < titleB) return 1;
        return 0;
      }
    });
    setTodos(sortedTodos);
  };

  const toggleSort = () => {
    const newSort = sortOrder === "asc" ? "dsc" : "asc";
    setSortOrder(newSort);
    sortTodos(newSort);
  };

  let done = 0;
  todos.forEach((todo) => {
    if (todo.completed) {
      return (done += 1);
    }
  });

  return (
    <>
      <div className="intro">
        <h1>To Do List:</h1>
        <h2>Create using JavaScript React App</h2>
        <h1 className="intro">Total: </h1>
      </div>
      <div className="controls">
        <input
          className="label"
          placeholder="Type"
          onInput={onInput}
          type="text"
          value={userInput}
        />
        <button className="btn" onClick={onAdd}>
          Add
        </button>

        <button className="btn" onClick={toggleSort}>
          {sortOrder === "asc" ? "Sort ASC" : "Sort DSC"}{" "}
        </button>
      </div>
      <Data
        todos={todos}
        onToggle={onToggle}
        onDelete={onDelete}
        onSaveEdit={onSaveEdit}
      />
    </>
  );
};
export default App;
