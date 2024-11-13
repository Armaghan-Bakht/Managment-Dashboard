import { useState, useEffect } from "react";
import axios from "axios";
import VITE_APP_API_URL from "../../../config/config";

const Department = () => {
    const [departmentData, setDepartmentData] = useState({
        name: "",
        status: "Active",
    });
    const [departments, setDepartments] = useState([]);

    // Fetch departments from API on component mount
    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        try {
            const response = await axios.get(`${VITE_APP_API_URL}/api/departments`);
            setDepartments(response.data);
        } catch (error) {
            console.error("Error fetching departments:", error);
        }
    };

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDepartmentData({ ...departmentData, [name]: value });
    };

    // Create department
    const createDepartment = async () => {
        try {
            const response = await axios.post(`${VITE_APP_API_URL}/api/departments`, departmentData);
            console.log("Department created successfully:", response.data);
            fetchDepartments(); // Refresh the department list after adding a new one
        } catch (error) {
            console.error("Error creating department:", error.response ? error.response.data : error.message);
        }
    };

    // Generate random id between 1 and the length of the departments array
    const generateRandomId = (index) => {
        return Math.floor(Math.random() * departments.length) + 1;
    };

    return (
        <>
            <div className="main-content">
                <div className="page-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between px-3">
                                <h4 className="fs-16 fw-semibold mb-1 mb-md-1">Department</h4>
                                <a
                                    className="btn btn-primary d-flex gap-2 align-items-center"
                                    style={{ fontWeight: "500" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#creatertaskModal"
                                >
                                    Add Department
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Department table */}
                    <table id="datatable" className="table table-hover table-bordered table-striped dt-responsive nowrap">
                        <thead>
                            <tr>
                                <th className="py-2 px-2 border">Id</th>
                                <th className="py-2 px-2 border">Name</th>
                                <th className="py-2 px-2 border">Status</th>
                                <th className="py-2 px-2 border">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments.map((department, index) => (
                                <tr key={department._id}>
                                    <td>{generateRandomId(index)}</td> {/* Use the random id */}
                                    <td>{department.name}</td>
                                    <td className="text-center">{department.status}</td>
                                    <td className="text-center">{new Date(department.created_at).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal for adding department */}
                <div className="modal fade" id="creatertaskModal" tabIndex="-1" aria-labelledby="creatertaskModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content border-0">
                            <div className="modal-header p-3 bg-soft-info">
                                <h5 className="modal-title" id="creatertaskModalLabel">Create Department</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="row g-3">
                                        <div className="col-lg-12">
                                            <label htmlFor="departmentName" className="form-label">Department Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="departmentName"
                                                name="name"
                                                placeholder="Enter Department"
                                                value={departmentData.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <label htmlFor="status" className="form-label">Status</label>
                                            <select
                                                className="form-select"
                                                id="departmentName"
                                                name="status"
                                                value={departmentData.status}
                                                onChange={handleInputChange}
                                            >
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                        </div>
                                        <div className="mt-4">
                                            <div className="hstack gap-2 justify-content-end">
                                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                <button
                                                    type="button"
                                                    className="btn btn-success"
                                                    onClick={createDepartment}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Department;
