import React, { useState } from 'react';
import './App.css';
import { IBug } from './components/IBug';

function App() {
  const [newBugDescription, setNewBugDescription] = useState<string>('');
  const [newBugPriority, setNewBugPriority] = useState<string>('Medium');
  const [bugList, setBugList] = useState<IBug[]>([]);

  const addBug = () => {}
  const deleteBug = () => {}

  return (
    <div className="App">
      <h1>🐞 Bug Tracker</h1>

      <form onSubmit={addBug}>
        <label htmlFor="newBugDescription">
          New bug description: 
        </label>
        <input type="text" id="newBugDescription" value={newBugDescription} onChange={e => setNewBugDescription(e.target.value)} />
        
        <label htmlFor="newBugPriority">
          New bug priority:
        </label>
        <select id="newBugPriority" value={newBugPriority} onChange={e => setNewBugPriority(e.target.value)}>
          <option value="Low"> Low </option>
          <option value="Medium"> Medium </option>
          <option value="High"> High </option>
        </select>

        <button type="submit"> Add New Bug </button>
      </form>
    </div>
  );
}

export default App;
