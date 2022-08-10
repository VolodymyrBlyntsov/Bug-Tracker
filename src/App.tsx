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
    </div>
  );
}

export default App;
