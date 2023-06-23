import React, { useState } from "react";
import "./pedro.css";

const initialTasks = [
  { id: 1, title: "Task 1", swimlane: "To Do" },
  { id: 2, title: "Task 2", swimlane: "To Do" },
  { id: 3, title: "Task 3", swimlane: "In Progress" },
  { id: 4, title: "Task 4", swimlane: "Completed" },
];

const Board = () => {
  const [show, setshow] = useState(true);
  const [newtask, setnewtask] = useState("");
  const [idt, setid] = useState(4);
  const [tasks, setTasks] = useState(initialTasks);

  const addnewtask = () => {
    setid(idt+1)
    tasks.push({ id: idt, title: newtask, swimlane: "To Do" });
    console.log(tasks)
    setshow(!show);
  };

  const deletet = (t) => {
    const a = prompt("Are you sure? \n 1 for Yes\n 0 for No");
    a == 1 && setTasks(tasks.filter((task) => task.id !== t.id));
  };

  const onDragStart = (event, id) => {
    event.dataTransfer.setData("text/plain", id);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, swimlane) => {
    const taskId = event.dataTransfer.getData("text/plain");
    const updatedTasks = tasks.map((task) => {
      if (task.id === parseInt(taskId)) {
        return { ...task, swimlane };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const renderSwimlane = (swimlane) => {
    const swimlaneTasks = tasks.filter((task) => task.swimlane === swimlane);

    return (
      <div
        className="swimlane"
        key={swimlane}
        onDragOver={onDragOver}
        onDrop={(event) => onDrop(event, swimlane)}
      >
        <h3>{swimlane}</h3>
        {swimlaneTasks.map((task) => (
          <div
            className="task"
            key={task.id}
            draggable
            onDragStart={(event) => onDragStart(event, task.id)}
          >
            <p>{task.title}</p>
            <button onClick={() => deletet(task)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="board">
        <div className="todo todocard">
          <div>{renderSwimlane("To Do")}</div>
        </div>
        <div className="progress todocard">{renderSwimlane("In Progress")}</div>
        <div className="completed todocard">{renderSwimlane("Completed")}</div>
      </div>
      <div>
        {show ? (
          <button onClick={() => setshow(!show)}>Add New</button>
        ) : (
          <div>
            <input
              type="text"
              onChange={(event) => setnewtask(event.target.value)}
            />
            <h1>{newtask}</h1>
            <button onClick={addnewtask} >
              Add Task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
