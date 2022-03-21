import React from "react";
import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "blabla",
    email: "blabla@bla",
    username: "username",
    street: "astreet",
    areacode: "2121",
    city: "acity",
    password: "hej",
  });

  const [tempUser, setTempUser] = useState({
    name: "blabla",
    email: "blabla@bla",
    username: "username",
    street: "astreet",
    areacode: "2121",
    city: "acity",
    newPassword: "",
    password: "",
    repeatPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser(tempUser);
  };
  console.log(user);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setTempUser({ ...tempUser, [name]: value });
  };

  const updatePassword = (e) => {
    e.preventDefault();
    if (
      user.password === tempUser.password &&
      tempUser.newPassword === tempUser.repeatPassword
    ) {
      setUser({ ...user, password: tempUser.newPassword });
    } else if (user.password != tempUser.password) {
      alert("not the same password");
    } else {
      //document.querySelector("#repeatPassword").
    }
  };

  return (
    <>
      <form>
        <div style={{ marginBottom: "2vh" }}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={user.name}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: "2vh" }}>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={user.email}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: "2vh" }}>
          <label htmlFor="userName">Username: </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: "2vh" }}>
          <label htmlFor="street">Street: </label>
          <input
            type="text"
            id="street"
            name="street"
            defaultValue={user.street}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: "2vh" }}>
          <label htmlFor="areaCode">Areacode: </label>
          <input
            type="text"
            id="areaCode"
            name="areaCode"
            defaultValue={user.areacode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            name="city"
            defaultValue={user.city}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <form>
        <div>
          <label htmlFor="password">Current Password: </label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password: </label>
          <input
            type="text"
            id="newPassword"
            name="newPassword"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="repeatPassword">repeat Password: </label>
          <input
            type="text"
            id="repeatPassword"
            name="repeatPassword"
            onChange={handleChange}
            className="@error('title') is-invalid @enderror"
          />
        </div>
        <button type="submit" onClick={updatePassword}>
          Change password
        </button>
      </form>
    </>
  );
};

export default Profile;
