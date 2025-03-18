function Task({ task }) {
    return (
      <li>
        <div className="task-item">
          <p><strong>{task.title}</strong></p>
          <p>{task.date}</p>
        </div>
      </li>
    );
  }
  
  export default Task;