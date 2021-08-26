import './App.css';
import AddTask from './Component/AddTask';
import ListTask from './Component/ListTask';

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
