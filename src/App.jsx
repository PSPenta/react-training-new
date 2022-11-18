// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [tasks, setTasks] = useState([]);

  let addTask = () => {
    let task = document.getElementById('task').value;
    setTasks([...tasks, task]);
  };

  let deleteTask = (i) => {
    const newTasks = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <input type={"text"} name={"task"} id={"task"} />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, i, j) => <li key={i}>{task}&nbsp;&nbsp;<button onClick={() => deleteTask(i)}>Delete</button></li>)}
      </ul>
    </div>
  );
}

export default App;
