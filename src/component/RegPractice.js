import React, { Fragment, useState } from "react";

const RegPractice = () => {

    const [user ,setUser]=useState({
        username:"",
        password:"",
        email:"",
        designation:"",
        gender:"",
        bio:"",
        terms:false
    })

    const EnableRegister=()=>{
        for(let key of Object.keys(user)){
            if((key==="terms" && user[key]===false)|| user[key]===""){
                return true;
            }
       
          }
          return false;
    }
    const HendleChange=(event)=>{
    setUser({
        ...user,
        [event.target.name]: event.target.type==="checkbox" ? event.target.checked : event.target.value
    })
    }
    const HendleSubmit=(event)=>{
        event.preventDefault(); 
        console.log(user)
        
    }
  return (
    <Fragment>
        <pre>{JSON.stringify(user)}</pre>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header bg-warning">
                <p className="h3">Registration</p>
              </div>
              <div className="card-body">
                <form onSubmit={HendleSubmit}>
                  <div className="mb-2">
                    <input
                      type="name"
                      name="username"
                      onChange={HendleChange} value={user.username}
                      placeholder="Enter Name"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="password"
                      name="password"
                      onChange={HendleChange} value={user.password}
                      placeholder="Enter Password"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      name="email"
                      onChange={HendleChange} value={user.email}
                      placeholder="Enter Email"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <select className="form-control" onChange={HendleChange} value={user.designation} name="designation">
                     <option value="">Select On Option</option>
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
                    <label className="form-check-label"> Gender : </label>
                    <input type="radio" className="form-check-input" onChange={HendleChange}  name="gender" value={"male"}/>
                    <label className="form-check-label">Male</label>
                    <input type="radio" className="form-check-input" onChange={HendleChange}  name="gender" value={"female"}/>
                    <label >Female</label>
                  </div>
                  <div className="mb-2">
                    <textarea name="bio"  rows="3" className="form-control" placeholder="Bio"onChange={HendleChange} value={user.bio}></textarea>
                  </div>
                  <div className="mb-2">
                    <input type="checkbox" className="form-check-input" onChange={HendleChange} value={user.terms} name={"terms"}/>
                    <label className="form-check-label">Accept Terms & Condition</label>
                  </div>
                  <div className="mb-2">
                    <input
                    disabled={EnableRegister()}
                    type="submit" value="Register" className="btn btn-warning"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegPractice;
