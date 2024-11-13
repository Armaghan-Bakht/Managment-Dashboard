
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import VITE_APP_API_URL from '../../../config/config';

const EditEmploye = () => {
    const { id } = useParams(); // Get the user ID from the URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        joinDate: '',
        phone: '',
        gender: '',
        address: '',
        dob: '',
        technical_skills: '',
        job_title: '',
        department: '',
        designation: '',
        job_type_id: '',
        job_location_id: ''
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [departments, setDepartments] = useState([]);
    const [designations, setDesignations] = useState([]);
    const [jobTypes, setJobTypes] = useState([]);
    const [jobLocations, setJobLocations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userRes, departmentsRes, designationsRes, jobTypesRes, jobLocationsRes] = await Promise.all([
                    axios.get(`${VITE_APP_API_URL}/auth/api/users/${id}`),
                    axios.get(`${VITE_APP_API_URL}/api/departments`),
                    axios.get(`${VITE_APP_API_URL}/api/designation`),
                    axios.get(`${VITE_APP_API_URL}/api/jobtype`),
                    axios.get(`${VITE_APP_API_URL}/api/jobLocation`)
                ]);
                setFormData(userRes.data.user);
                setDepartments(departmentsRes.data);
                setDesignations(designationsRes.data);
                setJobTypes(jobTypesRes.data.jobs);
                setJobLocations(jobLocationsRes.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError('Failed to load data.');
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${VITE_APP_API_URL}/auth/api/users/${id}`, formData);
            alert('User updated successfully');
            navigate('/employe'); // Redirect to the users list or another relevant page
        } catch (error) {
            console.error('Error updating user:', error);
            setError('Failed to update user');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <div id="layout-wrapper">
                <div className="main-content d-flex justify-content-center mt-4">
                    <div className="page-content px-3 w-50">
                        <div className="card p-3">
                            <div className="d-grid gap-3">
                                <div className="card-header d-flex justify-content-between">
                                    <h2 className="card-title text-muted text-truncate" style={{ fontWeight: "bolder", fontSize: "20px" }}>
                                        Edit Employee
                                    </h2>
                                </div>
                                {/* Form Start  */}
                                <form onSubmit={handleSubmit}>
                                    {/* All input fields for editing user information */}
                                    <div className="d-flex justify-content-evenly">
                                        <div className="d-flex flex-column">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control form-control-lg"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control form-control-lg"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
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
                                        <div className="d-flex flex-column">
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
                                            <label htmlFor="phone" className="form-label">Phone</label>
                                            <input
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                className="form-control form-control-lg"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <label htmlFor="gender" className="form-label">Gender</label>
                                            <select
                                                className="form-select form-select-lg"
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-evenly">
                                        <div className="d-flex flex-column">
                                            <label htmlFor="address" className="form-label">Address</label>
                                            <input
                                                type="text"
                                                id="address"
                                                name="address"
                                                className="form-control form-control-lg"
                                                value={formData.address}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <label htmlFor="dob" className="form-label">Date of Birth</label>
                                            <input
                                                type="date"
                                                id="dob"
                                                name="dob"
                                                className="form-control form-control-lg"
                                                value={formData.dob}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-evenly">
                                        <div className="d-flex flex-column">
                                            <label htmlFor="technical_skills" className="form-label">Technical Skills</label>
                                            <input
                                                type="text"
                                                id="technical_skills"
                                                name="technical_skills"
                                                className="form-control form-control-lg"
                                                value={formData.technical_skills}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="d-flex flex-column">
                                            <label htmlFor="job_title" className="form-label">Job Title</label>
                                            <input
                                                type="text"
                                                id="job_title"
                                                name="job_title"
                                                className="form-control form-control-lg"
                                                value={formData.job_title}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-evenly gap-4 px-3">
                                        <div className="d-flex flex-column w-100">
                                            <label htmlFor="department" className="form-label">Department</label>
                                            <select
                                                className="form-select form-select-lg"
                                                name="department"
                                                value={formData.department}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Department</option>
                                                {departments.map(dept => (
                                                    <option key={dept._id} value={dept._id}>{dept.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="d-flex flex-column w-100">
                                            <label htmlFor="designation" className="form-label">Designation</label>
                                            <select
                                                className="form-select form-select-lg"
                                                name="designation"
                                                value={formData.designation}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Designation</option>
                                                {designations.map(designation => (
                                                    <option key={designation._id} value={designation._id}>{designation.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-evenly gap-4 px-3">
                                        <div className="d-flex flex-column w-100">
                                            <label htmlFor="job_type_id" className="form-label">Job Type</label>
                                            <select className="form-select form-select-lg" name="job_type_id" value={formData.job_type_id} onChange={handleChange} required>
                                                <option value="">Select Job Type</option>
                                                {jobTypes && jobTypes.map((job) => (
                                                    <option key={job._id} value={job._id}>{job.name}</option> // Ensure `id` and `type` match actual keys
                                                ))}
                                            </select>

                                        </div>

                                        <div className="d-flex flex-column w-100">
                                            <label htmlFor="job_location_id" className="form-label">Job Location</label>
                                            <select
                                                className="form-select form-select-lg"
                                                name="job_location_id"
                                                value={formData.job_location_id}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Job Location</option>
                                                {jobLocations.map(location => (
                                                    <option key={location._id} value={location._id}>{location.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* All input fields for editing user information */}

                                    <div className="d-flex justify-content-center mt-3">
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </div>
                                </form>
                                {/* From End  */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditEmploye;






