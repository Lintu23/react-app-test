import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TasksList';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  return (
    <div>
      <h1>Task Management Dashboard</h1>
      <TaskForm />
      <br/>
      <h2>Task Search</h2>
      <SearchBar onSearch={setSearchQuery} />
      <FilterDropdown onFilter={setSelectedStatus} />
      <br/> 
      <TaskList searchQuery={searchQuery} selectedStatus={selectedStatus} />
    </div>
  );
};

export default Dashboard;
