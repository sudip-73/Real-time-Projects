import React, { Fragment, useState } from "react";

function Register() {
  const [user, SetUser] = useState({
    name: "",
    password: "",
    email: "",
    designation: "",
    gender: "",
    bio: "",
    terms: false,
  });

  const InUpdate = (event) => {
    SetUser((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <Fragment>
      <pre>{JSON.stringify(user)}</pre>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-header bg-warning">
                <div className="h2 ">Registration</div>
              </div>
              <div className="card-body bg-light">
                <form>
                  <div className="mb-2">
                    <input
                      type="name"
                      name="name"
                      placeholder="Enter Name"
                      className="form-control"
                      onChange={InUpdate}
                      value={user.name}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      className="form-control"
                      onChange={InUpdate}
                      value={user.password}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      className="form-control"
                      onChange={InUpdate}
                      value={user.email}
                    />
                  </div>
                  <div className="mb-2">
                    <select className="form-control" 
                     name="designation"
                     onChange={InUpdate}
                      value={user.designation}>

                      <option value="">Select Designation</option>
                      <option value="Software Engineer">
                        Software Engineer
                      </option>
                      <option value="Sr.Software Engineer">
                        Sr.Software Engineer
                      </option>
                      <option value="Tech Lead">Tech Lead</option>
                      <option value="Manager">Manager</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label className="form-check-label">Gender : </label>
                    <input
                    name={"gender"}
                    onChange={InUpdate}
                    value={user.gender}
                      type="radio"
                     
                      className="form-check-input"
                    />
                    <label className="form-check-label"> Male </label>
                    <input
                    name={"gender"}
                    onChange={InUpdate}
                     value={user.gender}
                      type="radio"
                     
                      className="form-check-input"
                    />
                    <label className="form-check-label"> Female </label>
                  </div>


                  <div className="mb-2">
                    <textarea
                      className="form-control"
                      placeholder="Bio"
                      rows="3"
                      onChange={InUpdate}
                      value={user.bio}
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <input type="checkbox" className="form-check-input"
                    name={"terms"}
                    onChange={InUpdate}
                    value={user.bio}/>
                    <label className="form-check-label">
                      Accept Terms & Condition
                    </label>
                  </div>
                  <div className="mb-2">
                    <input
                      type="submit"
                      value="Register"
                      className="btn btn-warning"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
