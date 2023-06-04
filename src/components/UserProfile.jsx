import React from "react";
import { useState } from "react";
import { useUser } from "../contexts/UserContext";

export const UserProfile = () => {
  const { users } = useUser();

  const [selectedUserId, setSelectedUserId] = useState(users[0].id);

  const selectedUser = users.find(({ id }) => id === Number(selectedUserId));

  const selectUserHandler = (e) => {
    setSelectedUserId(e.target.value);
  };

  return (
    <div>
      <h1>Question 1</h1>
      <h3>Show any user from the dropdown</h3>
      <label>
        Users:{" "}
        <select onChange={(e) => selectUserHandler(e)} name="users">
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user?.name}
            </option>
          ))}
        </select>
      </label>

      <div className="user-description">
        <p>Name: {selectedUser?.name}</p>
        <p>Email: {selectedUser?.email}</p>
      </div>
    </div>
  );
};
