import React from "react";
import "./Todoitem.css";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/Todoslice";

const Todoitem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    console.log(id);
    dispatch(setCheck(id));
  };
  return (
    <div className="todoitem">
      <Checkbox
        checked={done}
        color={"primary"}
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={done ? "todoItem--done" : ""}>{name}</p>
    </div>
  );
};

export default Todoitem;
