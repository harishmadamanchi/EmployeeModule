import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import EmployeeContext from "../EmployeeContext";

const AddEmployee = () => {
  let history = useHistory();
  const initialValues = {
    id: 0,
    firstname: "",
    lastname: "",
    DOB: "",
    Designation: "",
    Profile: "",
    Exp: 0,
  };

  const [formData, setFormData] = useState(initialValues);
  const { employeeData, setEmployeeData } = useContext(EmployeeContext);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(formData);
    setFormData({ ...formData, id: Math.floor(Math.random() * 100 + 1) });
    setEmployeeData([...employeeData, formData]);
    alert("Employee Added");
    setFormData(initialValues);
    history.push("/");
  };

  return (
    <>
      <div>AddEmployee</div>

      <form>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            placeholder="Enter First Name"
            value={formData.firstname}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            placeholder="Enter Last Name"
            value={formData.lastname}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className="form-group">
          <label>DOB</label>
          <input
            type="date"
            className="form-control"
            id="DOB"
            name="DOB"
            placeholder="Enter Date of Birth"
            value={formData.DOB}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className="form-group">
          <label>Designation</label>
          <input
            type="text"
            className="form-control"
            id="Designation"
            name="Designation"
            placeholder="Enter Designation"
            value={formData.Designation}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className="form-group">
          <label>Profile picture link</label>
          <input
            type="text"
            className="form-control"
            id="Profile"
            name="Profile"
            placeholder="Enter Profile picture link"
            value={formData.Profile}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className="form-group">
          <label>Experience</label>
          <input
            type="number"
            className="form-control"
            id="Exp"
            name="Exp"
            placeholder="Enter Experience"
            value={formData.Exp}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => submitHandler(e)}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddEmployee;
