import React, { useState } from "react";
import ToDoList from "./ToDoList";
import InputArea from "./InputArea";

function App() {
  const [list, setList] = useState([]);

  function addItem(item) {
    setList((prevValue) => [...prevValue, item]);
  }

  function deleteItem(id) {
    setList((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea Add={addItem} />

      <div>
        <ul>
          {list.map((toDoItem, index) => (
            <ToDoList
              key={index}
              id={index}
              input={toDoItem}
              onCheck={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
