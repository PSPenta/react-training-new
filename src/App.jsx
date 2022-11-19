// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [tasks, setTasks] = useState([]);
  let [filter, setFilter] = useState('');

  let addTask = () => {
    let task = document.getElementById('task').value;
    setTasks([...tasks, task]);
  };

  let deleteTask = (i) => {
    const newTasks = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };

  let searchTask = () => {
    let filter = document.getElementById('search').value;
    setFilter(filter);
  };

  let clearFilter = () => {
    setFilter('');
  };

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <input type={"text"} name={"task"} id={"task"} onFocus={clearFilter} />
      <button onClick={addTask}>Add</button><br /><br />
      <input type={"text"} placeholder={"search task"} name={"search"} id={"search"} value={filter} onChange={searchTask} />
      <ul>
        {
          tasks
            .filter(task => task.includes(filter))
            .map((task, i, j) => <li key={i}>{task}&nbsp;&nbsp;<button onClick={() => deleteTask(i)}>Delete</button></li>)
        }
      </ul>
    </div>
  );
}

export default App;
