import React from 'react';
import { useTasks } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { updateTaskStatus, deleteTask } = useTasks();

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>Status: {task.status}</span> | <span>Priority: {task.priority}</span>
      
      {task.status === 'Pending' && (
        <button onClick={() => updateTaskStatus(task.id)}>Mark as Completed</button>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
