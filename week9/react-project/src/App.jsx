import Header from './components/Header';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';

function App() {
  const appName = "Welcome to My App";

  return (
    <div>
      <Header appName={appName} />
      <AddTask />
      <TasksList />
    </div>
  );
}

export default App;