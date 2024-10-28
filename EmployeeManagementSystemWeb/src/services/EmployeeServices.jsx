import axios from "axios";

const EMPLOYEE_BASE_API_URL = "http://localhost:8080/api/v1/employees";

class EmployeeServices {
    // Save a new employee
    saveEmployee(employee) {
        return axios.post(EMPLOYEE_BASE_API_URL, employee);
    }

    // Get all employees
    getEmployee() {
        return axios.get(EMPLOYEE_BASE_API_URL);
    }

    // Get an employee by ID
    getEmployeeById(id) {
        return axios.get(`${EMPLOYEE_BASE_API_URL}/${id}`);
    }

    // Delete an employee by ID
    deleteEmployee(id) {
        return axios.delete(`${EMPLOYEE_BASE_API_URL}/${id}`);
    }

    // Update an employee by ID
    updateEmployee(id, employee) {
        return axios.put(`${EMPLOYEE_BASE_API_URL}/${id}`, employee);
    }
}

// Export a single instance of EmployeeServices
export default new EmployeeServices();
