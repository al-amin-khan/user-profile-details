import React from 'react';
import './App.css';
import {useState, useEffect} from 'react'
import User from './components/User/User'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      {
        users.map(user => <User user={user}></User>)
      }
    </div>
  );
}

export default App;
