import { FaTrash } from 'react-icons/fa';

function Task({ task }) {
    return (
      <li>
        <div className="task-item">
          <div className="task-content">
          <p><strong>{task.title}</strong></p>
          <p>{task.date}</p>
        </div>
        <div className="task-actions">
          <FaTrash className="delete-icon" />
        </div>
        </div>
      </li>
    );
  }
  
  export default Task;