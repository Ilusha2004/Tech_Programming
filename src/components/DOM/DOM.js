import React, { useState } from 'react';
import AdminPage from '../Admin/script'

const DOMapp = () => {
  const [posts, setPosts] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [trips, setTrips] = useState([]);
  const [message, setMessage] = useState('');

  const addObj = (description) => {
    const newPost = { id: Date.now(), description };
    setPosts([...posts, newPost]);
  };

  const addTrip = (newTrip) => {
    setTrips([...trips, newTrip]);
  };

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const editPost = (postId, newDescription) => {
    const updatedPosts = posts.map(post =>
      post.id === postId ? { ...post, description: newDescription } : post
    );
    setPosts(updatedPosts);
  };

  const removePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  };

  const filterPosts = (filterValue) => {
    setFilterValue(filterValue);
  };

  const handleChangeUsername = (e) => {
    setUsernameInput(e.target.value);
  };

  const loginUser = () => {
    setCurrentUser(usernameInput);
  };

  const renderPosts = () => {
    const filteredPosts = filterValue
      ? posts.filter(post => post.description.includes(filterValue))
      : posts;

    return (
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>
            {post.description}
            <button onClick={() => editPost(post.id, 'New description')}>
              Edit
            </button>
            <button onClick={() => removePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Welcome, {currentUser || 'Guest'}</h1>
      <input
        type="text"
        value={usernameInput}
        onChange={handleChangeUsername}
        placeholder="Enter username"
      />
      <button onClick={loginUser}>Login</button>
      <input
        type="text"
        value={filterValue}
        onChange={(e) => filterPosts(e.target.value)}
        placeholder="Filter"
      />
      <button onClick={() => addTrip('New post')}>Add</button>
      <AdminPage
        addTrip={addTrip}
        setMessage={setMessage}
        generateId={generateId}
        setDepartureStation={AdminPage.setDepartureStation}
        setArrivalStation={AdminPage.setArrivalStation}
        setDepartureTime={AdminPage.setDepartureTime}
        setArrivalTime={AdminPage.setArrivalTime}
        setTrainNumber={AdminPage.setTrainNumber}
      />
      {renderPosts()}
    </div>
  );
};

export default DOMapp;
