import React, { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");

  function inputHandle(event) {
    const newValue = event.target.value;
    setItem(newValue);
  }

  return (
    <div className="form">
      <input type="text" onChange={inputHandle} value={item} />
      <button
        onClick={() => {
          props.Add(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
