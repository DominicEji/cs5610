import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Task({ task, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault(); // Prevent navigation when deleting
    e.stopPropagation(); // Stop event bubbling
    setIsDeleting(true);
    try {
      await onDelete(task.id);
    } catch (error) {
      console.error('Delete failed:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <li className={`task-item ${isDeleting ? 'deleting' : ''}`}>
      <NavLink 
        to={`/tasks/${task.id}`}
        className={({ isActive }) => 
          `task-content ${isActive ? 'active-task' : ''}`
        }
      >
        <div>
          <h3 className="task-title">{task.title}</h3>
          <p className="task-date">{task.date}</p>
        </div>
      </NavLink>
      <div className="task-actions">
        <button
          className="delete-btn"
          onClick={handleDelete}
          disabled={isDeleting}
          aria-label={`Delete task: ${task.title}`}
        >
          <FaTrash className={`delete-icon ${isDeleting ? 'spin' : ''}`} />
          {isDeleting ? 'Deleting...' : ''}
        </button>
      </div>
    </li>
  );
}

export default Task;