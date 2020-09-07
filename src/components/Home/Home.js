import React from 'react';
import {useState, useEffect} from 'react';
import User from '../User/User'


const Home = () => {
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
        users.map(user => <User key={user.id} user={user}></User>)
      }
    </div>
  );
}

export default Home;
