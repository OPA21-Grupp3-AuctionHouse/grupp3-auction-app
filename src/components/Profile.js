import React, { useContext } from "react";
import { useState } from "react";
import { DataContext } from "./AuctionPage";

const Profile = () => {
  const provider = useContext(DataContext);

  const [tempUser, setTempUser] = useState(provider.user);
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
    if (
      tempUser.email &&
      tempUser.name &&
      tempUser.street &&
      tempUser.areacode &&
      tempUser.city
    )
      if (tempUser.email.includes("@" && ".")) {
        provider.setUser(tempUser);
      } else {
        alert("enter real email");
      }
    else {
      alert("Fill in all Fields");
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setTempUser({ ...tempUser, [name]: value });
  };

  const updatePassword = (e) => {
    e.preventDefault();
    if (
      provider.user.password === tempPassword.password &&
      tempPassword.newPassword === tempPassword.repeatPassword
    ) {
      provider.setUser({
        ...provider.user,
        password: tempPassword.newPassword,
      });
      alert("Password changed!");
    } else if (provider.user.password !== tempPassword.password) {
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
          <div className="col-auto">
            <label htmlFor="staticEmail2" className="visually-hidden">
              Username:
            </label>
            <input
              type="text"
              readOnly
              className="form-control-plaintext"
              id="staticEmail2"
              value={provider.user.username}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Name:
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="name"
              name="name"
              defaultValue={provider.user.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Email:
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              id="email"
              name="email"
              defaultValue={provider.user.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Street:
            </span>
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              id="street"
              name="street"
              defaultValue={provider.user.street}
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Areacode:
            </span>
            <div>
              <input
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                type="text"
                id="areaCode"
                name="areaCode"
                defaultValue={provider.user.areacode}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              City:
            </span>

            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              id="city"
              name="city"
              defaultValue={provider.user.city}
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
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Current Password:
            </span>

            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              id="password"
              name="password"
              onChange={handleChangePassword}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              New Password:
            </span>

            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              type="text"
              id="newPassword"
              name="newPassword"
              onChange={handleChangePassword}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
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
