import React from 'react';
import Task from './Task';

function TasksList({ tasks, onDelete }) {
  // Function to handle task deletion with confirmation
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(id);
    }
  };

  return (
    <div className="tasks-container">
      {tasks.length > 0 ? (
        <ul className="tasks-list">
          {tasks.map((task) => (
            <Task 
              key={task.id} 
              task={task} 
              onDelete={handleDelete}  // Pass the confirmation-wrapped delete handler
            />
          ))}
        </ul>
      ) : (
        <div className="no-tasks-message">
          <p>No tasks found</p>
          <small>Add a new task to get started</small>
        </div>
      )}
    </div>
  );
}

export default TasksList;