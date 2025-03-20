import React, { useState } from 'react';
import Header from './components/Header';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';

function App() {
  const appName = "Welcome to My App";
  const [showAddTask, setShowAddTask] = useState(false);

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div>
      <Header
        appName={appName}
        showAddTask={showAddTask}
        onToggleAddTask={toggleAddTask}
      />
      {showAddTask && <AddTask />} {/* Conditionally render AddTask */}
      <TasksList />
    </div>
  );
}

export default App;