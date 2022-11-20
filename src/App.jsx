// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [tasks, setTasks] = useState([]);
  let [filter, setFilter] = useState('');

  let addTask = (e) => {
    e.preventDefault();
    let task = document.getElementById('task').value;
    setTasks([...tasks, task]);
  };

  let deleteTask = (i) => {
    const newTasks = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };

  let searchTask = (e) => {
    let filter = e.target.value;
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
      </header>
      <form onSubmit={addTask}>
        <input type={"text"} name={"task"} id={"task"} onFocus={clearFilter} />
        <button className={"btn"}>Add</button>
      </form>
      <button className={"btn"} onClick={deleteAll}>Clear List</button><br />
      <input type={"text"} placeholder={"search task"} name={"search"} id={"search"} value={filter} onChange={searchTask} />
      <ul>
        {
          tasks
            .filter(task => task.includes(filter))
            .map((task, i, j) => <li key={i}>{task}<span className={"close"} onClick={() => deleteTask(i)}>{"\u00D7"}</span></li>)
        }
      </ul>
    </div>
  );
}

export default App;
