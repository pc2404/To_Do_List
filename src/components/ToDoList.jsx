import React from "react";

function ToDoList(props) {
  return (
    <div
      onClick={() => {
        props.onCheck(props.id);
      }}
    >
      <li>{props.input}</li>
    </div>
  );
}

export default ToDoList;
