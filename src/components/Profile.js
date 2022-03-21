import React from "react";
import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "blabla",
    email: "blabla@bla",
    username: "MyUsername",
    street: "astreet",
    areacode: "2121",
    city: "acity",
    password: "hej",
  });

  const [tempUser, setTempUser] = useState({
    name: user.name,
    email: user.email,
    username: user.username,
    street: user.street,
    areacode: user.areacode,
    city: user.city,
    password: user.password,
  });
  const [tempPassword, setTempPassword] = useState({
    newPassword: "",
    password: "",
    repeatPassword: "",
  });
  const handleChangePassword = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setTempPassword({ ...tempPassword, [name]: value });
  };
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
      user.password === tempPassword.password &&
      tempPassword.newPassword === tempPassword.repeatPassword
    ) {
      setUser({ ...user, password: tempPassword.newPassword });
      alert("Password changed!");
    } else if (user.password !== tempPassword.password) {
      alert("Wrong current password");
    } else {
      //document.querySelector("#repeatPassword").
      alert("New passwords doesnt match");
    }
  };

  return (
    <>
      <form>
        <div style={{ marginBottom: "2vh" }}>
          <label htmlFor="userName">Username: {user.username}</label>
        </div>
        <div style={{ marginBottom: "2vh" }}>
          <label htmlFor="name">Name: </label>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={user.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div style={{ marginBottom: "2vh" }}>
          <label htmlFor="email">Email: </label>
          <div>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={user.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={{ marginBottom: "2vh" }}>
          <label htmlFor="street">Street: </label>
          <div>
            <input
              type="text"
              id="street"
              name="street"
              defaultValue={user.street}
              onChange={handleChange}
            />
          </div>
        </div>
        <div style={{ marginBottom: "2vh" }}>
          <label htmlFor="areaCode">Areacode: </label>
          <div>
            <input
              type="text"
              id="areaCode"
              name="areaCode"
              defaultValue={user.areacode}
              onChange={handleChange}
            />
          </div>
        </div>
        <div style={{ marginBottom: "2vh" }}>
          <label htmlFor="city">City: </label>
          <div>
            <input
              type="text"
              id="city"
              name="city"
              defaultValue={user.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className="submit-button-profile"
          type="submit"
          onClick={handleSubmit}
          style={{ marginLeft: "1vh" }}
        >
          Update profile
        </button>
      </form>
      <form>
        <div style={{ marginBottom: "2vh", marginLeft: "2vh" }}>
          <label htmlFor="password">Current Password: </label>
          <div>
            <input
              type="text"
              id="password"
              name="password"
              onChange={handleChangePassword}
            />
          </div>
        </div>
        <div style={{ marginBottom: "2vh", marginLeft: "2vh" }}>
          <label htmlFor="newPassword">New Password: </label>
          <div>
            <input
              type="text"
              id="newPassword"
              name="newPassword"
              onChange={handleChangePassword}
            />
          </div>
        </div>
        <div style={{ marginBottom: "2vh", marginLeft: "2vh" }}>
          <label htmlFor="repeatPassword">repeat Password: </label>
          <div>
            <input
              type="text"
              id="repeatPassword"
              name="repeatPassword"
              onChange={handleChangePassword}
              className="@error('title') is-invalid @enderror"
            />
          </div>
        </div>
        <button
          className="submit-button-profile"
          type="submit"
          onClick={updatePassword}
          style={{ marginLeft: "1vh" }}
        >
          Change password
        </button>
      </form>
    </>
  );
};

export default Profile;
