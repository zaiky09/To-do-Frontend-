import React, { useState } from "react";
import logo from '../assets/trace.svg';
import './Todo.css';
import NavBar from "../navbar/NavBar";

function Todo() {
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState("all");

  const addTask = (event) => {
    event.preventDefault();
    const task = event.target.elements.task.value;
    const date = event.target.elements.date.value;
    if (task && date) {
      setTasks([...tasks, { task, date, status: "in progress" }]);
      event.target.elements.task.value = "";
      event.target.elements.date.value = "";
    }
  };

  const toggleStatus = (index) => {
    const newTasks = [...tasks];
    if (newTasks[index].status === "in progress") {
      newTasks[index].status = "completed";
    } else {
      newTasks[index].status = "in progress";
    }
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const filterTasks = (status) => {
    if (status === "all") {
      return tasks;
    } else {
      return tasks.filter((task) => task.status === status);
    }
  };

  return (
    <div>
        <NavBar/>
        <center className="form">
            <img src={logo} alt="Logo" width="300" height="250" className="d-inline-block align-text-top" id="img"/>
            <h1 className="mt-5">WELCOME! 👋</h1>
            <h3 className="p">Get Started</h3>
            <form onSubmit={addTask} className="form-group mb-2 col-md-4">
                <input className="form-control mb-2" type="text" placeholder="Enter task" name="task" />
                <input className="form-control" type="date" name="date" />
                <center>
                    <button className="btn btn-outline-light mt-3" type="submit">Add</button>
                </center>
            </form>
        </center>
        <div className="status">
            <div className="text-center">
                <h3 className="mt-3">Status of Tasks:</h3>
                <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
                All
                </button>
                <button
                className={filter === "in progress" ? "active" : ""}
                onClick={() => setFilter("in progress")}
                >
                In Progress
                </button>
                <button
                className={filter === "completed" ? "active" : ""}
                onClick={() => setFilter("completed")}
                >
                Completed
                </button>
            </div>

            <div className="list">
                <ol>
                    {filterTasks(filter).map((task, index) => (
                    <li className="mb-2" key={index}>
                        <span
                        style={{ textDecoration: task.status === "completed" ? "line-through" : "none" }}
                        onClick={() => toggleStatus(index)}
                        >
                        {task.task} - {task.date}
                        </span>
                        <button className="btn btn-outline-danger ms-5" onClick={() => deleteTask(index)}>Cancel</button>
                    </li>
                    ))}
                </ol>
            </div>
        </div>
    </div>
  );
}

export default Todo;
