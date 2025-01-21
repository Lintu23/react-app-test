import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskForm = () => {
  const { addTask } = useTasks();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),  // Simple unique ID based on timestamp
      title: taskTitle,
      description: taskDescription,
      priority,
      status: 'Pending',
    };
    
    addTask(newTask);
    setTaskTitle('');
    setTaskDescription('');
    setPriority('Low');
    setShowSuccess(true);
    
    setTimeout(() => setShowSuccess(false), 2000); // Hide success message after 2 seconds
  };

  return (
    <div>
      {showSuccess && <div>Task added successfully!</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
          placeholder="Task Title"
        />
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Task Description"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
