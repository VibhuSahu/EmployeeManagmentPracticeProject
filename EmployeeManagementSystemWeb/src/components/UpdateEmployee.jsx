import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeServices from '../services/EmployeeServices';

const UpdateEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        emailId: "",
    });
    const [alert, setAlert] = useState({ message: "", type: "" });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EmployeeServices.getEmployeeById(id);
                setEmployee(response.data); // Assuming response.data contains the employee object
            } catch (error) {
                console.error("Error fetching employee:", error);
                setAlert({ message: "Failed to fetch employee data.", type: "error" });
            }
        };
        fetchData();
    }, [id]);

    const updateEmployee = async (e) => {
        e.preventDefault();
        try {
            await EmployeeServices.updateEmployee(id, employee); // Update the employee with the API call
            setAlert({ message: "Data is updated successfully.", type: "success" });
            setTimeout(() => {
                navigate("/employees"); // Redirect after a short delay
            }, 1500);
        } catch (error) {
            console.error("Error updating employee:", error);
            setAlert({ message: "Failed to update employee.", type: "error" });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleCancel = () => {
        navigate("/employees"); // Redirect to employee list without making changes
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12">
            <div className="max-w-2xl shadow-lg border bg-white p-8 rounded-lg">
                <h1 className="font-thin text-2xl tracking-wider text-gray-800 mb-6">Update Employee</h1>
                
                {/* Alert Section */}
                {alert.message && (
                    <div className={`mb-4 p-2 rounded-lg text-white ${alert.type === "success" ? "bg-green-600" : "bg-red-600"}`}>
                        {alert.message}
                    </div>
                )}

                <form onSubmit={updateEmployee}>
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
                            type="submit" // Change to type="submit" to use form submission
                            className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
                        >
                            Save
                        </button>
                        <button 
                            type="button" // Change to type="button" to avoid form submission
                            onClick={handleCancel} 
                            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-500 transition duration-200"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateEmployee;
