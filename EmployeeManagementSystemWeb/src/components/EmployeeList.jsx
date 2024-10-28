// EmployeeList.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeServices from '../services/EmployeeServices';
import Employee from './Employee';

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "" });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeServices.getEmployee();
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = async (e, id) => {
    e.preventDefault();

    try {
      await EmployeeServices.deleteEmployee(id);
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id)
      );
      setAlert({ message: "Employee deleted successfully.", type: "success" });
    } catch (error) {
      console.error("Error deleting employee", error);
      setAlert({ message: "Failed to delete employee. Please try again.", type: "error" });
    }
  };

  return (
    <div className="container mx-auto px-4 my-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">Employee List</h1>
        <button
          onClick={() => navigate("/addEmployee")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-300"
        >
          Add Employee
        </button>
      </div>

      {/* Alert Section */}
      {alert.message && (
        <div className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-md text-white transition-opacity duration-300 ${alert.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
          {alert.message}
        </div>
      )}

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="text-left font-medium uppercase tracking-wider px-6 py-3">First Name</th>
              <th className="text-left font-medium uppercase tracking-wider px-6 py-3">Last Name</th>
              <th className="text-left font-medium uppercase tracking-wider px-6 py-3">Email ID</th>
              <th className="text-left font-medium uppercase tracking-wider px-6 py-3">Action</th>
            </tr>
          </thead>

          {!loading && employees.length > 0 ? (
            <tbody className="text-gray-700">
              {employees.map((employee) => (
                <Employee key={employee.id} deleteEmployee={deleteEmployee} employee={employee} />
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
                  {loading ? "Loading..." : "No employees found"}
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
