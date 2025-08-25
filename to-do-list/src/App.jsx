import { useState } from "react";
import "./App.css";

function App() {
  const [taskList, setList] = useState([]);
  const [task, setTask] = useState("");

  const addtask = (e) => {
    e.preventDefault();
    if (task == "") return;
    let tempList = taskList.slice();
    tempList.push(task);
    setList(tempList);
    setTask("");
  };

  //Removing a task
  const removeTask = (ind) => {
    console.log(ind);

    setList([...taskList.slice(0, ind), ...taskList.slice(ind + 1)]);
  };
  return (
    <div className="main-page">
      <div className="container">
        <form
          className="taskForm"
          onSubmit={(e) => {
            addtask(e);
          }}
        >
          <input
            type="text"
            className="textArea"
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a task..."
            value={task}
          />
          <button type="submit" className="addTask">
            <img alt="+" src="../public/add-svgrepo-com (1).svg"
            width={23}
            height={23} 
             />        
               </button>
        </form>
            </div>
        <div className="listt">
          <ul>
            {taskList.map((ele, ind) => {
              return (
                <li key={ind}>
                  <span>{ele}</span>
                  <button onClick={() => removeTask(ind)}>
                    <img src="../public/delete-1-svgrepo-com.svg" alt="X" width={20} height={20}/>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
    </div>
  );
}

export default App;
