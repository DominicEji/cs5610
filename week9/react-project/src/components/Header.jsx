function Header({ appName, showAddTask, onToggleAddTask }) {
  return (
    <header>
      <h1>{appName}</h1>
      <button onClick={onToggleAddTask}>
        {showAddTask ? 'Close' : 'Add Task'} {/* Update button text dynamically */}
      </button>
    </header>
  );
}

export default Header;