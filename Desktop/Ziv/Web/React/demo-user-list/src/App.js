import React, { useState } from "react";

import UserList from "./components/UsersList/UserList";
import AddUserForm from "./components/addUserForm/AddUserForm";
import ErrorModal from "./components/errorDialog/ErrorModal";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState("");

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  const closedHandler = () => {
    setShowErrorModal(false);
  }

  const fieldEmptyHandler = () => {
    setShowErrorModal(true);
    setErrorModalMessage("You must fill all fields!")
  }

  const invalidAgeHandler = () => {
    setShowErrorModal(true);
    setErrorModalMessage("Please enter a valid age (years)!")
  }

  return (
    <div>
      <AddUserForm onFieldEmpty={fieldEmptyHandler} onInvalidAge={invalidAgeHandler} onAddUser={addUserHandler}/>
      <UserList users={users} />
      {showErrorModal && <ErrorModal onClosed={closedHandler} errorMessage={errorModalMessage}/>}
    </div>
  );
}

export default App;
