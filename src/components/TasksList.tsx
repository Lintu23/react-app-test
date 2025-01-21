import React from 'react';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = ({ searchQuery, selectedStatus }) => {
  const { tasks } = useTasks();

  const filteredTasks = tasks.filter((task) => {
    const isMatchingTitle = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const isMatchingStatus = selectedStatus ? task.status === selectedStatus : true;
    return isMatchingTitle && isMatchingStatus;
  });

  return (
    <div>
      
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
