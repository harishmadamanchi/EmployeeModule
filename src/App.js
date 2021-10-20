import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import AddEmployee from "./component/AddEmployee";
import EmployeeContext from "./EmployeeContext";
import EditEmployee from "./component/EditEmployee";

function App() {
  const [employeeData, setEmployeeData] = useState([]);

  return (
    <div className="container">
      <EmployeeContext.Provider value={{ employeeData, setEmployeeData }}>
        <Router>
          <div className="col-md-12">
            <h1 className="text-center" style={style}></h1>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/add" component={AddEmployee} />
              <Route path="/edit/:id" component={EditEmployee} />
            </Switch>
          </div>
        </Router>
      </EmployeeContext.Provider>
    </div>
  );
}

const style = {
  color: "red",
  margin: "10px",
};

export default App;
