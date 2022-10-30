import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersListHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age:uAge, id:Math.random().toString()}]
    })
  }
  return (
    <>
      <AddUser onAddUser={addUsersListHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
