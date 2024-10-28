import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Docs from "./components/Docs"; // Make sure the Docs component exists
import Home from "./components/Home"; // Make sure the Home component exists
import UpdateEmployee from "./components/UpdateEmployee";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        {" "}
        {/* Add padding to avoid content being hidden behind the navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeeList />} /> {/* Updated route */}
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/Docs" element={<Docs />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
