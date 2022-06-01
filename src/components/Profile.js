import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { DataContext } from "./AuctionPage";
import UserService from "../services/UserService";
import AuthService from "../services/AuthService";

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
    oldpassword: "",
    password: "",

    repeatPassword: "",
  });

  useEffect(() => {
    async function loadUser() {
      UserService.getUser().then((res) => {
        UserService.getUserById(res.data).then((res) => {
          setTempUser(res.data);
        });
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
        provider.setAddress([
          tempUser.streetAddress,
          tempUser.postCode,
          tempUser.city,
        ]);
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
    if (tempPassword.repeatPassword !== tempPassword.password) {
      alert("New passwords not the same");
    } else {
      let formData = new FormData();

      formData.append("oldpassword", tempPassword.oldpassword);
      formData.append("password", tempPassword.password);
      AuthService.updatePassword(formData).then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          alert("Password changed!");
        } else {
          alert("wrong password");
        }
      });
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
                id="firstName"
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
                id="lastName"
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
                required
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                type="password"
                id="oldpassword"
                name="oldpassword"
                onChange={handleChangePassword}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                New Password:
              </span>

              <input
                minlength="6"
                required
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                type="password"
                id="password"
                name="password"
                onChange={handleChangePassword}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Repeat Password:
              </span>

              <input
                minlength="6"
                required
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                type="password"
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
      </div>
    </>
  );
};

export default Profile;
