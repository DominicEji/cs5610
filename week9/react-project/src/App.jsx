import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, Navigate, Outlet } from 'react-router-dom';
import Header from './components/Header';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import './index.css';

function App() {
  const appName = "Welcome to My App";
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks from server
  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/tasks', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTasks(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError('Failed to load tasks. Please check your backend server.');
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add new task to server
  const addTask = async (newTask) => {
    try {
      const response = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to add task: ${response.status}`);
      }

      await fetchTasks();
      return true;
    } catch (error) {
      console.error('Error adding task:', error);
      setError('Failed to add task. Please try again.');
      return false;
    }
  };

  // Delete task from server
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to delete task: ${response.status}`);
      }

      await fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
      setError('Failed to delete task. Please try again.');
    }
  };

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="app-container">
      <nav className="main-nav">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Home
        </NavLink>
        {' '}
        <NavLink 
          to="/tasks" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Tasks
        </NavLink>
      </nav>

      <Routes>
        <Route 
          path="/" 
          element={
            <div className="home-page">
              <h1>{appName}</h1>
              <p>Manage your tasks efficiently</p>
            </div>
          } 
        />
        
        <Route path="/tasks" element={
          <div className="tasks-page">
            <Header
              appName={appName}
              showAddTask={showAddTask}
              onToggleAddTask={toggleAddTask}
            />
            {showAddTask && <AddTask onAddTask={addTask} />}
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <div className="error-message">
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
              </div>
            ) : (
              <>
                <TasksList tasks={tasks} onDelete={deleteTask} />
                <Outlet /> {/* Renders nested child routes */}
              </>
            )}
          </div>
        }>
          <Route path=":taskId" element={<TaskDetails tasks={tasks} />} />
        </Route>
        
        <Route path="/404" element={
          <div className="not-found-page">
            <h2>404 - Not Found</h2>
            <p>The page you're looking for doesn't exist.</p>
            <NavLink to="/">Return Home</NavLink>
          </div>
        } />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
}

export default App;