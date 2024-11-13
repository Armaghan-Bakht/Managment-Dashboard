import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import VITE_APP_API_URL from '../../../config/config';

const EditProject = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [project, setProject] = useState({
        name: '',          // This will store the project title (name)
        customer_id: '',
        start_date: '',
        end_date: '',
        total: '',
        status: '',
        description: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch project data when the component mounts
    useEffect(() => {
        const abortController = new AbortController();

        const fetchProjectDetails = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/api/project/${id}`, {
                    signal: abortController.signal
                });
                setProject({
                    name: response.data.name || '',          // Assigning the project name
                    customer_id: response.data.customer_id || '',
                    start_date: response.data.start_date || '',
                    end_date: response.data.end_date || '',
                    total: response.data.total || '',
                    status: response.data.status || '',
                    description: response.data.description || ''
                });
                setLoading(false);
            } catch (err) {
                if (err.name !== 'CanceledError') {
                    setError('Failed to fetch project details');
                    console.error('Fetch error:', err);
                    setLoading(false);
                }
            }
        };

        fetchProjectDetails();

        return () => {
            abortController.abort(); // Cleanup on unmount
        };
    }, [id]);

    // Handle changes in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject({ ...project, [name]: value });
    };

    // Handle form submission to update the project
    const handleSubmit = async (e) => {
        e.preventDefault();
        const projectData = {
            name: project.name,                   // Ensure 'name' is being updated
            customer_id: project.customer_id,
            start_date: project.start_date,
            end_date: project.end_date,
            total: project.total,
            status: project.status,
            description: project.description
        };
        try {
            await axios.patch(`${VITE_APP_API_URL}/api/project/${id}`, projectData);
            navigate('/projects');
        } catch (err) {
            setError('Failed to update project');
            console.error('Update error:', err);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="main-content d-flex justify-content-center mt-4">
            <div className="page-content px-3 w-50">
                <div className="card p-3">
                    <div className="d-grid gap-3">
                        <div className="card-header d-flex justify-content-between">
                            <h2 className="card-title text-muted text-truncate" style={{ fontWeight: "bolder", fontSize: "20px" }}>
                                Edit Project
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="px-2">
                                <label htmlFor="name" className="form-label">Project Title</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="name"
                                    name="name"  // This is what should be bound to the state 'name'
                                    value={project.name}  // This ensures the input is controlled by the 'name' in state
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="px-2">
                                <label htmlFor="customer_id" className="form-label">Customer</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="customer_id"
                                    name="customer_id"
                                    value={project.customer_id}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="d-flex justify-content-evenly gap-4 px-3">
                                <div className="d-flex flex-column w-100">
                                    <label htmlFor="start_date" className="form-label">Start Date</label>
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        id="start_date"
                                        name="start_date"
                                        value={project.start_date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="d-flex flex-column w-100">
                                    <label htmlFor="end_date" className="form-label">End Date</label>
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        id="end_date"
                                        name="end_date"
                                        value={project.end_date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-evenly gap-4 px-3">
                                <div className="d-flex flex-column w-100">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <select
                                        className="form-select form-select-lg"
                                        id="status"
                                        name="status"
                                        value={project.status}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="Started">Started</option>
                                        <option value="Completed">Completed</option>
                                        <option value="On Going">On Going</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </div>
                            </div>
                            <div className="px-3 mt-4">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    className="form-control form-control-lg"
                                    id="description"
                                    name="description"
                                    value={project.description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <button type="submit" className="btn bg-primary text-white" style={{ fontWeight: "bold", fontSize: "16px" }}>
                                    Update Project
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProject;
