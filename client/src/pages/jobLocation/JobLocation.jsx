import { useState, useEffect } from "react";
import axios from "axios"; // Use axios for making HTTP requests
import VITE_APP_API_URL from "../../../config/config";

const JobLocation = () => {
    const [formData, setFormData] = useState({
        name: "",
        status: "Active", // default status
        created_at: new Date().toISOString(),
    });

    const [jobLocations, setJobLocations] = useState([]); // Store fetched job locations
    const [error, setError] = useState(null); // For handling errors

    // Fetch job locations when the component mounts
    useEffect(() => {
        const fetchJobLocations = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/api/jobLocation`);
                setJobLocations(response.data); // Store job locations in state
            } catch (error) {
                setError(error.response?.data?.message || "Error fetching job locations");
            }
        };
        fetchJobLocations();
    }, []); // Empty dependency array means this effect runs once after the component mounts

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${VITE_APP_API_URL}/api/jobLocation`, formData);
            setJobLocations([...jobLocations, response.data]); // Add the new job location to the list
            setFormData({
                name: "",
                status: "Active",
                created_at: new Date().toISOString(),
            });
        } catch (error) {
            setError(error.response?.data?.message || "Error creating job location");
        }
    };

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between px-3">
                            <div>
                                <h4 className="fs-16 fw-semibold mb-1 mb-md-1">Job Location</h4>
                            </div>
                            <div className="page-title-right d-flex gap-2" data-bs-toggle="modal" data-bs-target="#creatertaskModal">
                                <a className="btn btn-primary d-flex gap-2 align-items-center" style={{ fontWeight: "500" }}>
                                    Add Job Location
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* Job Location List Table */}
                    <table
                        id="datatable"
                        className="table table-hover table-bordered table-striped dt-responsive nowrap"
                        style={{ borderCollapse: "collapse", borderSpacing: "0", width: "100%" }}
                    >
                        <thead>
                            <tr>
                                <th className="py-2 px-2 border">Id</th>
                                <th className="py-2 px-2 border">Name</th>
                                <th className="py-2 px-2 border">Status</th>
                                <th className="py-2 px-2 border">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobLocations.map((jobLocation, index) => (
                                <tr key={jobLocation._id} style={{ cursor: 'pointer' }}>
                                    <td
                                        style={{
                                            padding: '8px 100px',
                                            textAlign: 'center',
                                            width: '80px',  // Reduced width for the ID column
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                    >
                                        {index + 1}
                                    </td>
                                    <td style={{ padding: '8px 12px' }}>{jobLocation.name}</td>
                                    <td className="text-center" style={{ padding: '8px 12px' }}>{jobLocation.status}</td>
                                    <td className="text-center" style={{ padding: '8px 12px' }}>
                                        {new Date(jobLocation.created_at).toLocaleDateString()}
                                    </td>
                                </tr>

                            ))}

                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Form for Creating Job Location */}
            <div className="modal fade" id="creatertaskModal" tabIndex="-1" aria-labelledby="creatertaskModalLabel" style={{ display: "none" }} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content border-0">
                        <div className="modal-header p-3 bg-soft-info">
                            <h5 className="modal-title" id="creatertaskModalLabel">Create Job Location</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-lg-12">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Enter job location name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-12">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <select
                                            className="form-select"
                                            name="status"
                                            value={formData.status}
                                            onChange={handleChange}
                                        >
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12">
                                        <label htmlFor="created_at" className="form-label">Start Date</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="created_at"
                                            placeholder="Select date"
                                            disabled
                                            value={formData.created_at}
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <div className="hstack gap-2 justify-content-end">
                                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-success">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {error && <p className="text-danger mt-2">{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobLocation;

