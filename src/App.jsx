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

  let deleteAll = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <header id='header'>
        <h2>My To Do List</h2>
        <input type={"text"} name={"task"} id={"task"} onFocus={clearFilter} />
        <button className={"btn"} onClick={addTask}>Add</button><br /><br />
      </header>
      <button className={"btn"} onClick={deleteAll}>Delete All Tasks</button><br /><br />
      <input type={"text"} placeholder={"search task"} name={"search"} id={"search"} value={filter} onChange={searchTask} />
      <ul>
        {
          tasks
            .filter(task => task.includes(filter))
            .map((task, i, j) => <li key={i}>{task}&nbsp;&nbsp;<button className={"btn btn-delete"} onClick={() => deleteTask(i)}>Delete</button></li>)
        }
      </ul>
    </div>
  );
}

export default App;
