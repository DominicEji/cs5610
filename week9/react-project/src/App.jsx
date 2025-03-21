import React, { useState } from 'react';
import Header from './components/Header';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';


function App() {
  const appName = "Welcome to My App";
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  // Fetch tasks from the fake server
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:5000/tasks');
        const data = await response.json();
        setTasks(data); // Update state with fetched tasks
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks(); // Call the async function
  }, []); 

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