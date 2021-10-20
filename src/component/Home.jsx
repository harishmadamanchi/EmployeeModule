import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import EmployeeContext from "../EmployeeContext";

const Home = () => {

  const {employeeData,setEmployeeData} = useContext(EmployeeContext);
  let history = useHistory();
  const editHandler = (id) => {
    history.push(`/edit/{id}`);
  }

  const deleteHandler = (id) => {
    var confirm = window.confirm('Do you want to delete');
    if(confirm){
      let updatedEmployeeList = employeeData.filter(emp => emp.id!==id);
      setEmployeeData(updatedEmployeeList);
      alert('Employee Deleted');
    }
  }
  return (<>
          <div className='text-center'>
            Employee Module
          </div>
          <Link to = '/add'>
            <button type="button" class="btn btn-primary">Add Employee</button>
          </Link>

          <table className="table">
  <thead>
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Image</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>

         {
           employeeData.map(emp => {
             return (
               <tr>
                  <td>{emp.firstname}</td>
                  <td>{emp.lastname}</td>
                  <td><img src = {emp.Profile}/></td>
                  <td><button type="button" class="btn btn-info" onClick= {({emp.id}) => editHandler({emp.id})}>Edit</button></td>
                  <td><button type="button" class="btn btn-danger" onClick= {() => deleteHandler()}>Delete</button></td>
               </tr>
             )
           })
         }
            
  
    
    
  </tbody>
</table>
          </>);
};

export default Home;
