import "./App.css";
import Input from "./Components/Input";
import { useSelector } from "react-redux";
import Todoitem from "./Components/Todoitem";
import { selecttodoList } from "../src/features/Todoslice";

function App() {
  const todolist = useSelector(selecttodoList);
  return (
    <div className="App">
      <div className="app_container">
        <div className="apptodo_container">
          {todolist.map((items) => (
            <Todoitem name={items.item} done={items.done} id={items.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
