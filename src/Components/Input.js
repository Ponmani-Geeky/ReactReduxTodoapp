import React, { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/Todoslice";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("addinggg....", input);
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
};

export default Input;
