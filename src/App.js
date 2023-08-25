import { Fragment } from "react";
import "./App.css";
import Navbar from "./component/Layout/Navbar";

import Register from "./component/Practice/Register";

function App() {
  return (
    <Fragment>
       <Navbar/>
      <Register/>
    </Fragment>
  );
}

export default App;
