import React from "react";
import Card from "../Card/Card";

import "./data.style.css";

const Data = (props) => {
  const { todos, onDelete, onToggle, onSaveEdit } = props;
  return (
    <>
      {/**this is the code for create display, map over the state obj */}
      <div className="box">
        {todos.map((todos, id) => {
          return (
            <Card
              todos={todos}
              key={todos.id}
              onDelete={onDelete}
              onToggle={onToggle}
              onSaveEdit={onSaveEdit}
            />
          );
        })}
      </div>
    </>
  );
};

export default Data;
