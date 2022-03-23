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
      <div className="profile-outer-div">
        <form>
          <div class="col-auto">
            <label for="staticEmail2" class="visually-hidden">
              Username:
            </label>
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              id="staticEmail2"
              value={user.username}
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Name:
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="name"
              name="name"
              defaultValue={user.name}
              onChange={handleChange}
            />
          </div>

          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Email:
            </span>
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="email"
              name="email"
              defaultValue={user.email}
              onChange={handleChange}
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Street:
            </span>
            <input
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              id="street"
              name="street"
              defaultValue={user.street}
              onChange={handleChange}
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Areacode:
            </span>
            <div>
              <input
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                type="text"
                id="areaCode"
                name="areaCode"
                defaultValue={user.areacode}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              City:
            </span>

            <input
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              id="city"
              name="city"
              defaultValue={user.city}
              onChange={handleChange}
            />
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

        <form style={{ marginTop: "8vh" }}>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Current Password:
            </span>

            <input
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              id="password"
              name="password"
              onChange={handleChangePassword}
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              New Password:
            </span>

            <input
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              id="newPassword"
              name="newPassword"
              onChange={handleChangePassword}
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Repeat Password:
            </span>

            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              id="repeatPassword"
              name="repeatPassword"
              onChange={handleChangePassword}
            />
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
      </div>
    </>
  );
};

export default Profile;
