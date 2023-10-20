import axios from "axios";
import { Modal } from "bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LevelAppIII() {
  const intialData = {
    userName: "",
    password: "",
    role: "",
    name: "",
    enrolled: "",
  };
  const [values, setValue] = useState(intialData);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const loadRecord = (id) => {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if (id === element.userId) {
        setValue(element);
        break;
      }
    }
  };
  useEffect(() => {
    getDetails();
    setShowModal(false);
  }, []);
  const getDetails = () => {
    axios.get(`http://localhost:3333/showLevelIIIRequests`).then((res) => {
      console.log("res: ", res);
      console.log(res.data);
      if (res.status === 200) setData(res.data);
    });
  };

  const handleChange = (name, val) => {
    // e.preventDefault();

    setValue((prevalue) => {
      return {
        ...prevalue,
        [name]: val,
      };
    });
  };

  const makeEnrollment = (userID, status, level) => {
    let url =
      "http://localhost:3333/changeRequests/" +
      level +
      "/" +
      userID +
      "/" +
      status;
    axios.get(url).then((res) => {
      console.log("res: ", res);
      console.log(res.data);
      if (res.status === 200) setData(res.data);
    });
  };

  return (
    <div>
      <h2>Account Entitlement Level III</h2>

      {showModal === true ? (
        <>
          <div className="container">
            <div className="row">
              <div className="col"></div>
              <div className="col">
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={values.name}
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
                  />
                  <label className="form-label" htmlFor="loginName">
                    Username
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="role"
                    className="form-control"
                    value={values.role}
                  />
                  <label className="form-label" htmlFor="loginName">
                    Role
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="module"
                    className="form-control"
                    value={values.moduleName}
                  />
                  <label className="form-label" htmlFor="loginName">
                    Module
                  </label>
                </div>
                <br></br>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  onClick={() => {
                    setShowModal(false);
                    handleChange("enrolled", "Approved");
                    makeEnrollment(values.userId, "Approved", 3);
                  }}
                >
                  Approve
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="submit"
                  className="btn btn-danger btn-block mb-4"
                  onClick={(e) => {
                    handleChange("enrolled", "Reject");
                    setShowModal(false);
                    console.log("====================================");
                    console.log("Reject", values);
                    console.log("====================================");
                    makeEnrollment(values.userId, "Reject", 3);
                  }}
                >
                  Reject
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="submit"
                  className="btn btn-secondary btn-block mb-4"
                  onClick={(e) => {
                    navigate("/entitlement");
                  }}
                >
                  Back
                </button>
              </div>
              <div className="col"></div>
            </div>

            <dialog id="modal" class="modal">
              <button id="closeModal" class="modal-close-btn">
                Close
              </button>
              <p>nana</p>
            </dialog>
          </div>
        </>
      ) : data.length === 0 ? (
        <>
          <div className="alert alert-danger" role="alert">
            Sorry!! No applications Found!!!
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="col"></div>
              <div className="col">
                List
                <div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Module</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((val, rowID) => (
                        <tr key={rowID}>
                          <td>{val.userId}</td>
                          <td>{val.name}</td>
                          <td>{val.role}</td>
                          <td>{val.moduleName}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                loadRecord(val.userId);
                                setShowModal(true);
                              }}
                            >
                              Show Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default LevelAppIII;
