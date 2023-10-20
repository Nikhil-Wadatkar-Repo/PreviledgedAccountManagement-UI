import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AccountCreation() {
  const intialData = {
    userName: "",
    password: "",
    role: "",
    name: "",
    moduleName: "",
  };
  const navigate = useNavigate();
  const [values, setValue] = useState(intialData);
  const handleChange = (name, e) => {
    e.preventDefault();

    setValue((prevalue) => {
      return {
        ...prevalue,
        [name]: e.target.value,
      };
    });
  };

  const saveDetails = (details) => {
    console.log("saveDetails: ", details);

    // let headers = new Headers();

    // headers.append("Content-Type", "application/json");
    // headers.append("Accept", "application/json");
    // // headers.append(
    // //   "Authorization",
    // //   "Basic " + base64.encode(username + ":" + password)
    // // );
    // headers.append("Origin", "http://localhost:3333");

    // fetch("http://localhost:3333/createUserDetails", {
    //   mode: "cors",
    //   method: "POST",
    //   headers: headers,
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json))
    //   .catch((error) => console.log("Authorization failed: " + error.message));

    // fetch(`http://localhost:3333/createUserDetails`, details).then((response) =>
    //   response.json()
    // );
    axios
      .post(`http://localhost:3333/createUserDetails`, details)
      .then((res) => {
        console.log("res: ", res);
        console.log(res.data);
        if (res.status === 200) {
          setValue(intialData);
          navigate("/entitlement");
        }
      });
  };

  return (
    <div>
      <h2>Account Creation</h2>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col  border border-primary rounded">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
              >
                <div className="text-center mb-3">
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    xc xc
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    bfbdf
                    <i className="fab fa-google"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    trth
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    mjm
                    <i className="fab fa-github"></i>
                  </button>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={values.name}
                    onChange={(e) => handleChange("name", e)}
                  />
                  <label className="form-label" htmlFor="loginName">
                    Name:
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={values.userName}
                    onChange={(e) => handleChange("userName", e)}
                  />
                  <label className="form-label" htmlFor="loginName">
                    Username
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="loginPassword"
                    className="form-control"
                    value={values.password}
                    onChange={(e) => handleChange("password", e)}
                  />
                  <label className="form-label" htmlFor="loginPassword">
                    Password
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <label>Role:</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={values.role}
                    onChange={(e) => handleChange("role", e)}
                  >
                    <option selected>Open this select menu</option>
                    <option value="USER">USER</option>
                    <option value="ACCOUNT_ADMIN">Account Admin</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                </div>
                <div className="form-outline mb-4">
                  <label>Module:</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={values.moduleName}
                    onChange={(e) => handleChange("moduleName", e)}
                  >
                    <option selected>Open this select menu</option>
                    <option value="Module I">Module I</option>
                    <option value="Module II">Module II</option>
                    <option value="Module III">Module III</option>
                  </select>
                </div>
                <br></br>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  onClick={(e) => {
                    console.log("====================================");
                    console.log("Details on click: ", values);
                    console.log("====================================");
                    saveDetails(values);
                  }}
                >
                  Sign in
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  onClick={() => {
                    setValue(intialData);
                  }}
                >
                  Reset
                </button>
                <div className="text-center">
                  <p>
                    Not a member? <a href="#!">Register</a>
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="tab-register"
              >
                <div className="text-center mb-3">
                  <p>Sign up with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>

                <p className="text-center">or:</p>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="registerName"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="registerName">
                    Name
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="registerUsername"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="registerUsername">
                    Username
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="registerEmail"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="registerEmail">
                    Email
                  </label>
                </div>

                <div className="form-outline mb-2">
                  <input
                    type="password"
                    id="registerPassword"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="registerPassword">
                    Password
                  </label>
                </div>

                <div className="form-outline mb-2">
                  <input
                    type="password"
                    id="registerRepeatPassword"
                    className="form-control"
                  />
                  <label
                    className="form-label"
                    htmlFor="registerRepeatPassword"
                  >
                    Repeat password
                  </label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="registerCheck"
                    checked
                    aria-describedby="registerCheckHelpText"
                  />
                  <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-3"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default AccountCreation;
