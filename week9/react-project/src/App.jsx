import Header from './components/Header';

function App() {
  const appName = "Welcome to My App";

  // Hard-coded tasks array
  const tasks = [
    {
      id: 1,
      title: "Review week 9 material",
      date: "June 4th at 1 pm",
    },
    {
      id: 2,
      title: "Do quiz 9",
      date: "June 4th at 6 pm",
    },
    {
      id: 3,
      title: "Work on assignment 2",
      date: "June 5th at 8 am",
    },
  ];

  return (
    <div>
      <Header appName={appName} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;