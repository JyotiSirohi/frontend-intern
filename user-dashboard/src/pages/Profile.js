import React, { useState } from 'react';

function Profile({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Handle form submission to add a new user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const newUser = {
        name,
        email,
      };
      addUser(newUser);  // Call addUser function from props
      setName('');  // Clear input fields
      setEmail('');
    }
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default Profile;
