import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { DataContext } from "./AuctionPage";
import UserService from "../services/UserService";

const Profile = () => {
  const provider = useContext(DataContext);
  const [tempUser, setTempUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    streetAddress: "",
    postCode: "",
    city: "",
  });

  const [tempPassword, setTempPassword] = useState({
    newPassword: "",
    password: "",
    repeatPassword: "",
  });

  useEffect(() => {
    async function loadUser() {
      UserService.getUserById(provider.user).then((res) => {
        setTempUser(res.data);
      });
    }

    loadUser();
  }, []);

  const handleChangePassword = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setTempPassword({ ...tempPassword, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tempUser);
    if (
      tempUser.firstName &&
      tempUser.lastName &&
      tempUser.email &&
      tempUser.streetAddress &&
      tempUser.postCode &&
      tempUser.city
    )
      if (tempUser.email.includes("@", ".")) {
        UserService.updateInfo(provider.user, tempUser);
        alert("User updated!");
      } else {
        alert("Enter valid email");
      }
    else {
      alert("Fill in all fields");
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
        <div className="profile-form-div">
          <h3>Edit profile info</h3>
          <form>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                First Name:
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                id="name"
                name="firstName"
                defaultValue={tempUser.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Last Name:
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                id="name"
                name="lastName"
                defaultValue={tempUser.lastName}
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
                defaultValue={tempUser.email}
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
                name="streetAddress"
                defaultValue={tempUser.streetAddress}
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
                  name="postCode"
                  defaultValue={tempUser.postCode}
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
                defaultValue={tempUser.city}
                onChange={handleChange}
              />
            </div>
            <button
              className="submit-button-profile"
              type="submit"
              data-cy="chprofile"
              onClick={handleSubmit}
              style={{ marginLeft: "1vh" }}
            >
              Update profile
            </button>
          </form>
        </div>

        <div className="profile-form-div">
          <h3>Change password</h3>
          <form>
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
              data-cy="chpass"
              onClick={updatePassword}
              style={{ marginLeft: "1vh" }}
            >
              Change password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
