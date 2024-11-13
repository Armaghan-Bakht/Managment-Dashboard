//  Ye code bilkul theek he bas kuch fields missing hen

import { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import VITE_APP_API_URL from "../../../config/config";

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    address: "",
    dob: "",
    joinDate: "",
    technical_skills: "",
    job_title : "",
    department: "",
    designation: "",
    job_type_id: "",   // Default empty string
    job_location_id: "", // Default empty string
  });

  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [jobTypes, setJobTypes] = useState([]);
  const [jobLocations, setJobLocations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [departmentsRes, designationsRes, jobTypesRes, jobLocationsRes] = await Promise.all([
          axios.get(`${VITE_APP_API_URL}/api/departments`),
          axios.get(`${VITE_APP_API_URL}/api/designation`),
          axios.get(`${VITE_APP_API_URL}/api/jobtype`),
          axios.get(`${VITE_APP_API_URL}/api/jobLocation`),
        ]);

        setDepartments(Array.isArray(departmentsRes.data) ? departmentsRes.data : []);
        setDesignations(Array.isArray(designationsRes.data) ? designationsRes.data : []);
        setJobTypes(Array.isArray(jobTypesRes.data.jobs) ? jobTypesRes.data.jobs : []); // Adjusted here to access jobs array
        setJobLocations(Array.isArray(jobLocationsRes.data) ? jobLocationsRes.data : []);
      } catch (err) {
        console.error("Failed to fetch options:", err);
        setError("Failed to load form options.");
      }
    };
    fetchOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? e.target.files[0] : value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Validation checks
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // Ensure the required fields are filled out
    if (!formData.name || !formData.email || !formData.phone || !formData.job_type_id || !formData.technical_skills || !formData.job_title || !formData.job_location_id || !formData.designation || !formData.department || !formData.username || !formData.joinDate) {
      setError("Please fill all required fields.");
      setLoading(false);
      return;
    }

    const updatedData = {
      ...formData,
      department_id: formData.department, // Renaming to match backend field
      designation_id: formData.designation, // Renaming to match backend field
      date_of_joining: formData.joinDate || new Date().toISOString(), // Set default join date if empty
    };

    try {
      const response = await axios.post(`${VITE_APP_API_URL}/auth/api/register`, updatedData, {
        headers: { "Content-Type": "application/json" }, // Sending as JSON now
      });

      console.log(response);
      alert("Employee created successfully");
      // navigate("/employee");
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
      setLoading(false);
    }
  };



  return (
    <>
      <div id="layout-wrapper">
        <div className="main-content d-flex justify-content-center mt-4">
          <div className="page-content px-3 w-50">
            <div className="card p-3">
              <div className="d-grid gap-3">
                <div className="card-header d-flex justify-content-between">
                  <h2 className="card-title text-muted text-truncate" style={{ fontWeight: "bolder", fontSize: "20px" }}>
                    Create Employee
                  </h2>
                  {/* <Link to="/employee/editEmployee" className="btn bg-primary text-white d-flex align-items-center" style={{ height: "40px", fontWeight: "bold", fontSize: "14px" }}>
                    Edit Employee
                  </Link> */}
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-evenly">
                    <div className="d-flex flex-column">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" id="name" name="name" className="form-control form-control-lg" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="d-flex flex-column">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" id="email" name="email" className="form-control form-control-lg" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <div className="d-flex flex-column">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="form-control form-control-lg"
                        value={formData.username}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="px-2">
                      <label htmlFor="joinDate" className="form-label">Date of Joining</label>
                      <input
                        type="date"
                        id="joinDate"
                        name="joinDate"
                        className="form-control form-control-lg"
                        value={formData.joinDate}
                        onChange={handleChange}
                        required
                      />
                    </div>

                  </div>

                  <div className="d-flex justify-content-evenly">
                    <div className="d-flex flex-column">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" id="password" name="password" className="form-control form-control-lg" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="d-flex flex-column">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <input type="password" id="confirmPassword" name="confirmPassword" className="form-control form-control-lg" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="px-2">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" id="phone" name="phone" className="form-control form-control-lg" value={formData.phone} onChange={handleChange} required />
                  </div>

                  <div className="px-2">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select className="form-select form-select-lg" name="gender" value={formData.gender} onChange={handleChange} required>
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="px-2">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" id="address" name="address" className="form-control form-control-lg" value={formData.address} onChange={handleChange} required />
                  </div>
                  <div className="px-2">
                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                    <input type="date" id="dob" name="dob" className="form-control form-control-lg" value={formData.dob} onChange={handleChange} required />
                  </div>

                  <div className="px-2">
                    <label htmlFor="technical_skills" className="form-label">Technical Skills</label>
                    <input type="text" id="technical_skills" name="technical_skills" className="form-control form-control-lg" value={formData.technical_skills} onChange={handleChange} required />
                  </div>

                  <div className="px-2">
                    <label htmlFor="job_title" className="form-label">Job Title</label>
                    <input type="text" id="job_title" name="job_title" className="form-control form-control-lg" value={formData.job_title} onChange={handleChange} required />
                  </div>

                  <div className="d-flex justify-content-evenly gap-4 px-3">
                    <div className="d-flex flex-column">
                      <label htmlFor="department" className="form-label">Department</label>
                      <select className="form-select form-select-lg" name="department" value={formData.department} onChange={handleChange} required>
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept._id} value={dept._id}>{dept.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="d-flex flex-column">
                      <label htmlFor="designation" className="form-label">Designation</label>
                      <select className="form-select form-select-lg" name="designation" value={formData.designation} onChange={handleChange} required>
                        <option value="">Select Designation</option>
                        {designations.map((designation) => (
                          <option key={designation._id} value={designation._id}>{designation.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="d-flex justify-content-evenly gap-4 px-3">
                    <div className="d-flex flex-column w-100">
                      <label htmlFor="jobType" className="form-label">Job Type</label>
                      <select className="form-select form-select-lg" name="job_type_id" value={formData.job_type_id} onChange={handleChange} required>
                        <option value="">Select Job Type</option>
                        {jobTypes.map((jobType) => (
                          <option key={jobType._id} value={jobType._id}>{jobType.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="d-flex flex-column w-100">
                      <label htmlFor="jobLocation" className="form-label">Job Location</label>
                      <select className="form-select form-select-lg" name="job_location_id" value={formData.job_location_id} onChange={handleChange} required>
                        <option value="">Select Job Location</option>
                        {jobLocations.map((location) => (
                          <option key={location._id} value={location._id}>{location.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {error && <div className="alert alert-danger mt-3">{error}</div>}
                  <div className="mt-3 d-grid">
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? "Creating..." : "Create Employee"}
                    </button>
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

export default CreateEmployee;













