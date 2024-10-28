// Employee.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
    const navigate = useNavigate();
    const editEmployee = async (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    }


  return (
    <tr className="border-b hover:bg-gray-50 transition-all duration-200">
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium">{employee.emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap">
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-800 cursor-pointer font-medium px-2 transition-all duration-200"
        >
          Edit
        </a>
        <a
          onClick={(e) => deleteEmployee(e, employee.id)}
          className="text-red-600 hover:text-red-800 cursor-pointer font-medium px-2 transition-all duration-200"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
