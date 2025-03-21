import React from 'react';
import Task from './Task';

function TasksList({ tasks, onDelete }) {
  return (
    <div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} />
          ))}
        </ul>
      ) : (
        <p>No Tasks Left</p>
      )}
    </div>
  );
}

export default TasksList;