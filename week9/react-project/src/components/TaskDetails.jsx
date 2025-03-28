import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

function TaskDetails({ tasks }) {
  const { taskId } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const task = tasks.find(t => t.id === Number(taskId));

  // Add this useEffect hook to fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users?task=${taskId}`);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [taskId]); // taskId in dependency array to refetch when URL changes

  if (!task) {
    return (
      <div className="task-details">
        <h2>Task Not Found</h2>
        <NavLink to="/tasks" className="back-link">
          Back to all tasks
        </NavLink>
      </div>
    );
  }

  return (
    <div className="task-details">
      <h2>Task Details</h2>
      <div className="detail-item">
        <strong>ID:</strong> {task.id}
      </div>
      <div className="detail-item">
        <strong>Title:</strong> {task.title}
      </div>
      <div className="detail-item">
        <strong>Date:</strong> {task.date}
      </div>
      
      {/* Add this new section to display responsible users */}
      <div className="detail-item">
        <strong>Responsible Users:</strong>
        {loading ? (
          <p>Loading users...</p>
        ) : users.length > 0 ? (
          <ul className="users-list">
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : (
          <p>No users assigned to this task</p>
        )}
      </div>

      <NavLink to="/tasks" className="back-link">
        Back to all tasks
      </NavLink>
    </div>
  );
}

export default TaskDetails;