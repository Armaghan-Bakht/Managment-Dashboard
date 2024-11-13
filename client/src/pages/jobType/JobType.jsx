import { useState, useEffect } from "react";
import axios from "axios";
import VITE_APP_API_URL from "../../../config/config";



const JobType = () => {
    const [jobData, setJobData] = useState({
        name: "",
        status: "Active",
    });

    const [jobTypes, setJobTypes] = useState([]); // State to store the fetched job types

    // Fetch job types from the API
    const fetchJobTypes = async () => {
        try {
            const response = await axios.get(`${VITE_APP_API_URL}/api/jobtype`); // Assuming the GET endpoint is correct
            setJobTypes(response.data.jobs); // Assuming response.data.jobs contains the list of jobs
        } catch (error) {
            console.error("Error fetching job types:", error.response ? error.response.data : error.message);
        }
    };

    // Run fetchJobTypes when the component mounts
    useEffect(() => {
        fetchJobTypes();
    }, []);

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...jobData, [name]: value });
    };

    // Create job type
    const createJobType = async () => {
        try {
            const response = await axios.post(`${VITE_APP_API_URL}/api/jobtype`, jobData);
            console.log("Job type created successfully:", response.data);
            
            // Clear form fields
            setJobData({ name: "", status: "Active" });

            // Refresh job types list after creating a new job type
            fetchJobTypes();
        } catch (error) {
            console.error("Error creating job type:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <>
            <div className="main-content">
                <div className="page-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between px-3">
                                <h4 className="fs-16 fw-semibold mb-1 mb-md-1">Job Type</h4>
                                <a
                                    className="btn btn-primary d-flex gap-2 align-items-center"
                                    style={{ fontWeight: "500" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#createJobModal"
                                >
                                    Add Job Type
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Job type table */}
                    <div>
                        <table id="datatable" className="table table-hover table-bordered table-striped dt-responsive nowrap" style={{ borderCollapse: "collapse", borderSpacing: "0", width: "100%" }}>
                            <thead>
                                <tr>
                                    <th className="py-2 px-2 border">Id</th>
                                    <th className="py-2 px-2 border">Name</th>
                                    <th className="py-2 px-2 border">Status</th>
                                    <th className="py-2 px-2 border">Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobTypes.map((job,index) => (
                                    <tr key={job._id}>
                                        <td>{index + 1}</td>
                                        <td>{job.name}</td>
                                        <td className="text-center">{job.status}</td>
                                        <td className="text-center">{new Date(job.created_at).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Modal for adding job type */}
                    <div className="modal fade" id="createJobModal" tabIndex="-1" aria-labelledby="createJobModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content border-0">
                                <div className="modal-header p-3 bg-soft-info">
                                    <h5 className="modal-title" id="createJobModalLabel">Create Job Type</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div className="row g-3">
                                            <div className="col-lg-12">
                                                <label htmlFor="jobName" className="form-label">Job Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="jobName"
                                                    name="name"
                                                    placeholder="Enter Job Name"
                                                    value={jobData.name}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <label htmlFor="status" className="form-label">Status</label>
                                                <select
                                                    className="form-select"
                                                    id="jobName"
                                                    name="status"
                                                    value={jobData.status}
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
                                                        onClick={createJobType}
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
            </div>
        </>
    );
};

export default JobType;








