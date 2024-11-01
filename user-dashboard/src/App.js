import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Profile from './pages/Profile';
import Users from './components/Users';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  // Fetch initial users from API
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Function to add a new user
  const addUser = (newUser) => {
    // Add a new user with a unique ID (assuming no ID collision here)
    const userWithId = { ...newUser, id: users.length + 1 };
    setUsers(prevUsers => [...prevUsers, userWithId]);
  };

  return (
    <Router>
      <div className="app">
        <header className="navbar">Dashboard</header>
        <div className="container">
          <nav className="sidebar">
            <ul>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>
          </nav>
          <main>
            <Routes>
              <Route path="/profile" element={<Profile addUser={addUser} />} />
              <Route path="/users" element={<Users users={users} setUsers={setUsers} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
