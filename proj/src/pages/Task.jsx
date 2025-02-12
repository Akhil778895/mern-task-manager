import { useState } from "react";

export const Tasks = () => {
    const [tasks, setTasks] = useState([
      { id: 1, title: "DSA" },
      { id: 2, title: "Assignment" },
    ]);
    const [newTask, setNewTask] = useState("");
  
    const addTask = () => {
      if (newTask) {
        setTasks([...tasks, { id: Date.now(), title: newTask }]);
        setNewTask("");
      }
    };
  
    const deleteTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id));
    };
  
    const editTask = (id) => {
      const updatedTask = prompt("Edit Task:");
      if (updatedTask) {
        setTasks(tasks.map(task => task.id === id ? { ...task, title: updatedTask } : task));
      }
    };
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>
        <div className="mb-4">
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            className="p-2 border rounded mr-2"
            placeholder="Add new task..."
          />
          <button onClick={addTask} className="bg-blue-600 text-white p-2 rounded">Add Task</button>
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="bg-white p-4 mb-2 rounded shadow-md flex justify-between items-center">
              {task.title}
              <div>
                <button onClick={() => editTask(task.id)} className="text-yellow-500 mr-2">Edit</button>
                <button onClick={() => deleteTask(task.id)} className="text-red-500">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  