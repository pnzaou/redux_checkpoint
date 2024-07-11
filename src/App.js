import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
      <div>
        <h1>Todo List</h1>
        <AddTask />
        <br />
        <ListTask />
      </div>
  );
}

export default App;