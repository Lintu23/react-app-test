import React from 'react';
import { TaskProvider } from './context/TaskContext';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <TaskProvider>
      <Dashboard />
    </TaskProvider>
  );
};

export default App;
