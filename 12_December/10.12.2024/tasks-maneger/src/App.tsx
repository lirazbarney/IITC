
import './App.css'
import { Priority, Status, Task } from "../types/types.ts";
import { useAuth } from './providers/task-provider';
import { useState } from 'react';

function App() {
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [priorityFilter, setPriorityFilter] = useState<Priority | "">("");
  const [statusFilter, setStatusFilter] = useState<Status | "">("");

  const { tasks, addNewTask, deleteTask, updateTask } = useAuth();

  let filteredTaskes = tasks;
  if (priorityFilter) {
    filteredTaskes = filteredTaskes.filter(currentTask => { return currentTask.priority === priorityFilter });
  }
  if (statusFilter) {
    filteredTaskes = filteredTaskes.filter(currentTask => { return currentTask.status === statusFilter });
  }

  if (taskToEdit) {
    (document.getElementById("taskTitle") as HTMLInputElement).value = taskToEdit.title;
    (document.getElementById("taskDescription") as HTMLInputElement).value = taskToEdit.description;
    (document.getElementById("taskDueDate") as HTMLInputElement).value = taskToEdit.dueDate;
    (document.getElementById("taskPriority") as HTMLSelectElement).value = taskToEdit.priority;
    (document.getElementById("taskStatus") as HTMLSelectElement).value = taskToEdit.status;
  } else {
    (document.getElementById("taskTitle") as HTMLInputElement).value = "";
    (document.getElementById("taskDescription") as HTMLInputElement).value = "";
    (document.getElementById("taskDueDate") as HTMLInputElement).value = "";
    (document.getElementById("taskPriority") as HTMLSelectElement).value = "low";
    (document.getElementById("taskStatus") as HTMLSelectElement).value = "pending";
  }

  function makeID(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    console.log();

    return result;
  }

  function createNewTask() {
    const newTask: Task = {
      id: makeID(),
      title: (document.getElementById("taskTitle") as HTMLInputElement)?.value,
      description: (document.getElementById("taskDescription") as HTMLInputElement)?.value,
      dueDate: (document.getElementById("taskDueDate") as HTMLInputElement)?.value,
      priority: ((document.getElementById("taskPriority") as HTMLSelectElement)?.value) as Priority,
      status: ((document.getElementById("taskStatus") as HTMLSelectElement)?.value) as Status,
    };
    (document.getElementById("taskTitle") as HTMLInputElement).value = "";
    (document.getElementById("taskDescription") as HTMLInputElement).value = "";
    (document.getElementById("taskDueDate") as HTMLInputElement).value = "";
    (document.getElementById("taskPriority") as HTMLSelectElement).value = "low";
    (document.getElementById("taskStatus") as HTMLSelectElement).value = "pending";
    addNewTask(newTask);

  }

  function updateTheTask() {
    const taskTitle = (document.getElementById("taskTitle") as HTMLInputElement)?.value;
    const taskDescription = (document.getElementById("taskDescription") as HTMLInputElement)?.value;
    const taskDueDate = (document.getElementById("taskDueDate") as HTMLInputElement)?.value;
    const taskPriority = ((document.getElementById("taskPriority") as HTMLSelectElement)?.value) as Priority;
    const taskStatus = ((document.getElementById("taskStatus") as HTMLSelectElement)?.value) as Status;

    (document.getElementById("taskTitle") as HTMLInputElement).value = "";
    (document.getElementById("taskDescription") as HTMLInputElement).value = "";
    (document.getElementById("taskDueDate") as HTMLInputElement).value = "";
    (document.getElementById("taskPriority") as HTMLSelectElement).value = "low";
    (document.getElementById("taskStatus") as HTMLSelectElement).value = "pending";
    updateTask(taskToEdit?.id as string, { id: taskToEdit?.id as string, title: taskTitle, description: taskDescription, dueDate: taskDueDate, priority: taskPriority, status: taskStatus });
    setTaskToEdit(null);
  }

  return (<>
    <label htmlFor='taskTitle'> new task title </label>
    <input name='taskTitle' id='taskTitle' /> <br />

    <label htmlFor='taskDescription'> new task description </label>
    <input name='taskDescription' id='taskDescription' /> <br />

    <label htmlFor="taskDueDate"> new task dueDate</label>
    <input type="date" name="taskDueDate" id='taskDueDate' /> <br />

    <label htmlFor="taskPriority">new task priority</label>
    <select name="taskPriority" id="taskPriority">
      <option value="low">low</option>
      <option value="medium">medium</option>
      <option value="high">high</option>
    </select> <br />

    <label htmlFor="taskStatus">new task status</label>
    <select name="taskStatus" id="taskStatus">
      <option value="pending">pending</option>
      <option value="in progress">in progress</option>
      <option value="completed">completed</option>
    </select> <br />

    <button onClick={createNewTask} className={(taskToEdit ? "hidden" : "")}>add new task</button>
    <button onClick={updateTheTask} className={(taskToEdit ? "" : "hidden")}>update task</button>

    {/*  */}

    <h2>all the tasks:</h2>

    <label htmlFor="filterTasksByPriority">filter by priority</label>
    <select name="filterTasksByPriority" id="filterTasksByPriority" onChange={(ev) => { setPriorityFilter(ev.target.value as (Priority | "")) }}>
      <option value="">none</option>
      <option value="low">low</option>
      <option value="medium">medium</option>
      <option value="high">high</option>
    </select> <br />

    <label htmlFor="filterTasksByStatus">filter by status</label>
    <select name="filterTasksByStatus" id="filterTasksByStatus" onChange={(ev) => { setStatusFilter(ev.target.value as (Status | "")) }}>
      <option value="">none</option>
      <option value="pending">pending</option>
      <option value="in progress">in progress</option>
      <option value="completed">completed</option>
    </select>

    {filteredTaskes.map(currentTask => {
      return (<div key={`${currentTask.id}`} className='mission-div'>
        <h4>{currentTask.title}, due to {String(currentTask.dueDate)}:</h4>
        <h6>priority: {currentTask.priority}, status: {currentTask.status}</h6>
        <span>{currentTask.description}</span> <br />
        <button onClick={() => deleteTask(currentTask.id)}>delete task</button>
        <button onClick={() => setTaskToEdit(currentTask)}>update task</button>
      </div>)
    })}

  </>)
}

export default App
