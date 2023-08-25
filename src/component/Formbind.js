import React, { Fragment, useState } from "react";

const Formbind = () => {
  const [edit, setEdit] = useState({
     username: "",
    email: ""   
  });

  let HendleChange = (event) => {
    setEdit((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  };
console.log(edit)
  return (
    <Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <form>
              <input
                type="text"
                name="username"
                placeholder="Enter name"
                value={edit.username}
                onChange={(e)=>HendleChange(e)}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={edit.email}
                onChange={(e)=>HendleChange(e)}
              />
            </form>
            <p className="h3 mt-2">{edit.email}</p>
            <p className="h3 mt-2">{edit.username}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Formbind;
