import React, { useContext } from "react";
import { useState } from "react";

import { Section } from "../styles/ProfileStyle";
import { userContext } from "../context/userContext";

const Profile = () => {
  const { user, setUser } = useContext(userContext);
  const [editing, setEditing] = useState(false);
  const [user_name, setUser_name] = useState(user.user_name);
  const [email, setEmail] = useState(user.email);

  function handleSubmit(e) {
    e.preventDefault();
    setEditing(!editing);
    setUser({ user_name: user_name, email: email });
  }
  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user_name">User&nbsp;Name</label>
        <br />
        {editing ? (
          <input
            type="text"
            name="user_name"
            id="user_name"
            value={user_name}
            onChange={(e) => {
              setUser_name(e.target.value);
            }}
          />
        ) : (
          <input
            type="text"
            name="user_name"
            id="user_name"
            value={user_name}
            disabled
            style={{ color: "white" }}
          />
        )}
        <br />
        <label htmlFor="email">Email</label>
        <br />
        {editing ? (
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            disabled
            style={{ color: "white" }}
          />
        )}
        <br />

        <div>
          <button>{editing ? "Save" : "Edit Profile"}</button>
        </div>
      </form>
    </Section>
  );
};

export default Profile;
