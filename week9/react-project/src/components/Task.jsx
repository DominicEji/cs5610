import { FaTrash } from 'react-icons/fa';

function Task({ task, onDelete }) {
  return (
    <li>
      <div className="task-item">
        <div className="task-content">
          <p><strong>{task.title}</strong></p>
          <p>{task.date}</p>
        </div>
        <div className="task-actions">
          <FaTrash 
          className="delete-icon"
          onClick={() => onDelete(task.id)}
            />
        </div>
      </div>
    </li>
  );
}

export default Task;