import React, { useState } from 'react';
import EmployeeServices from '../services/EmployeeServices';
import { useNavigate, useLocation } from 'react-router-dom';

const AddEmployee = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the location to access the state
  const onSuccess = location.state?.onSuccess; // Get the callback function

  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const validateEmail = (email) => {
    // Regular expression for validating email format
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const saveChanges = async (e) => {
    e.preventDefault();

    // Validation: Check for empty fields
    if (!employee.firstName || !employee.lastName || !employee.emailId) {
      setAlert({ message: "All fields are mandatory.", type: "error" });
      return;
    }

    // Validation: Check for valid email format
    if (!validateEmail(employee.emailId)) {
      setAlert({ message: "Please enter a valid email address.", type: "error" });
      return;
    }

    console.log("Employee data being sent:", employee);
    try {
      await EmployeeServices.saveEmployee(employee);
      if (onSuccess) onSuccess(); // Call the callback function on success
      navigate("/employees");
    } catch (err) {
      console.error("Error: ", err);
      setAlert({ message: "Failed to add employee.", type: "error" });
    }
  };

  const clearForm = () => {
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
    setAlert({ message: "Form cleared.", type: "info" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12">
      <div className="max-w-2xl shadow-lg border-b bg-white p-8 rounded-lg">
        <div className="px-8 py-8 w-full">
          <div className="font-thin text-2xl tracking-wider text-gray-800 mb-6">
            <h1>Add New Employee</h1>
          </div>

          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              value={employee.firstName} 
              onChange={handleChange} 
              className="h-10 w-full border px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter first name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              value={employee.lastName} 
              onChange={handleChange} 
              className="h-10 w-full border px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter last name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="emailId" className="block text-gray-700 font-medium mb-2">Email ID</label>
            <input 
              type="email" 
              id="emailId" 
              name="emailId" 
              value={employee.emailId} 
              onChange={handleChange} 
              className="h-10 w-full border px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="flex items-center space-x-4 mt-6">
            <button 
              onClick={saveChanges} 
              className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
            >
              Save
            </button>
            <button 
              onClick={clearForm} 
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 transition duration-200"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Alert Section */}
        {alert.message && (
          <div className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-md text-white transition-opacity duration-300 ${alert.type === "success" ? "bg-green-600" : alert.type === "error" ? "bg-red-600" : "bg-blue-600"}`}>
            {alert.message}
          </div>
        )}
      </div>
    </div>
  );
}

export default AddEmployee;
