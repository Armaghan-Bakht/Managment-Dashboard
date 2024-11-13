import { useState, useEffect } from 'react';

import axios from 'axios';
import VITE_APP_API_URL from '../../../config/config';

const Designation = () => {
    const [departments, setDepartments] = useState([]);
    const [designations, setDesignations] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [departmentId, setDepartmentId] = useState('');

    // Fetch departments and designations when component mounts
    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/api/departments`);
                setDepartments(response.data);
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        };

        const fetchDesignations = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/api/designation`);
                setDesignations(response.data);
            } catch (error) {
                console.error('Error fetching designations:', error);
            }
        };

        fetchDepartments();
        fetchDesignations();
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newDesignation = { name, status, department_id: departmentId };

        try {
            await axios.post(`${VITE_APP_API_URL}/api/designation`, newDesignation);
            alert('Designation created successfully!');
            setName('');
            setStatus('');
            setDepartmentId('');
            
            // Refresh designations list after creating a new one
            const response = await axios.get(`${VITE_APP_API_URL}/api/designation`);
            setDesignations(response.data);
        } catch (error) {
            console.error('Error creating designation:', error);
            alert('Failed to create designation.');
        }
    };

    return (
        <>
            <div className="main-content">
                <div className="page-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between px-3">
                                <h4 className="fs-16 fw-semibold mb-1 mb-md-1">Designation</h4>
                                <button 
                                    className="btn btn-primary" 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#creatertaskModal"
                                >
                                    Add Designation
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* Table of designations */}
                    <table id="datatable" className="table table-hover table-bordered table-striped dt-responsive nowrap" style={{ borderCollapse: "collapse", borderSpacing: "0", width: "100%" }}>
                        <thead>
                            <tr>
                                <th className="py-2 px-2 border">Id</th>
                                <th className="py-2 px-2 border">Name</th>
                                <th className="py-2 px-2 border">Status</th>
                                <th className="py-2 px-2 border">Department</th>
                                <th className="py-2 px-2 border">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {designations.map((designation,index) => (
                                <tr key={designation._id}>
                                    <td>{index + 1}</td>
                                    <td>{designation.name}</td>
                                    <td className="text-center">{designation.status}</td>
                                    <td className="text-center">
                                        {departments.find(dept => dept._id === designation.department_id)?.name || 'N/A'}
                                    </td>
                                    <td className="text-center">{new Date(designation.created_at).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Add Designation Modal */}
                    <div className="modal fade" id="creatertaskModal" tabIndex="-1" aria-labelledby="creatertaskModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content border-0">
                                <div className="modal-header p-3 bg-soft-info">
                                    <h5 className="modal-title" id="creatertaskModalLabel">Create Designation</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                            <div className="col-lg-12">
                                                <label htmlFor="designationName" className="form-label">Designation Name</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="designationName" 
                                                    placeholder="Enter Designation" 
                                                    value={name} 
                                                    onChange={(e) => setName(e.target.value)} 
                                                    required 
                                                />
                                            </div>

                                            <div className="col-lg-12">
                                                <label htmlFor="status" className="form-label">Status</label>
                                                <select 
                                                    className="form-select" 
                                                    value={status} 
                                                    onChange={(e) => setStatus(e.target.value)} 
                                                    required
                                                >
                                                    <option value="">Select Status</option>
                                                    <option value="Active">Active</option>
                                                    <option value="Inactive">Inactive</option>
                                                </select>
                                            </div>

                                            <div className="col-lg-12">
                                                <label htmlFor="department" className="form-label">Department</label>
                                                <select 
                                                    className="form-select" 
                                                    value={departmentId} 
                                                    onChange={(e) => setDepartmentId(e.target.value)} 
                                                    required
                                                >
                                                    <option value="">Select Department</option>
                                                    {departments.map(dept => (
                                                        <option key={dept._id} value={dept._id}>{dept.name}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="mt-4">
                                                <div className="hstack gap-2 justify-content-end">
                                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                    <button type="submit" className="btn btn-success">Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Designation;

















