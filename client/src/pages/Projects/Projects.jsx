import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import VITE_APP_API_URL from "../../../config/config";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [projectToDelete, setProjectToDelete] = useState(null);  // New state for project ID to delete

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/api/project`);
                setProjects(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch projects", err);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const handleDeleteProject = async () => {
        try {
            // Call the delete API with the ID
            await axios.delete(`${VITE_APP_API_URL}/api/project/${projectToDelete}`);
            // After deletion, update the project list
            setProjects(projects.filter((project) => project._id !== projectToDelete));
            // Close modal
            setProjectToDelete(null);
        } catch (err) {
            setError("Failed to delete project",err);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="main-content">
            <div className="page-content px-3">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row g-2">
                            <div className="col-auto">
                                <div className="search-box">
                                    <h3>Projects</h3>
                                </div>
                            </div>
                            <div className="col-lg-auto ms-sm-auto d-flex gap-4">
                                <div>
                                    <Link to="/projects/addprojects" className="btn btn-primary d-flex gap-2 align-items-center" style={{ fontWeight: "bolder" }}>
                                        Add Project
                                    </Link>
                                </div>
                                <div>
                                    <button className="btn btn-primary d-flex gap-2 align-items-center" style={{ fontWeight: "bolder" }}>
                                        <i className="fas fa-filter"></i> Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container px-3 g" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
                    <div className="row">
                        {projects.map((project) => (
                            <div key={project._id} className="col-md-3">
                                <div className="flex-grow-1 mb-2">
                                    <h6 className="fs-14 text-uppercase fw-semibold mb-0">{project.status}</h6>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-top">
                                            <Link to={`/projects/projectDetails/${project._id}`} className="card-text">
                                                <p className="text-muted text-truncate" style={{ fontWeight: "600", whiteSpace: "normal" }}>
                                                    Title: {project.name}
                                                </p>
                                            </Link>
                                            <div className="d-flex gap-2">
                                                <span className={`badge badge-label-${project.status.toLowerCase()} bg-danger`} style={{ height: "20px" }}>
                                                    {project.status}
                                                </span>
                                                <div className="dropdown">
                                                    <Link to="javascript:void(0);" className="text-muted" id="dropdownMenuLink4" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="fas fa-ellipsis-v"></i>
                                                    </Link>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink4">
                                                        <li><Link className="dropdown-item" to="#!"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> invoice</Link></li>
                                                        <li><Link className="dropdown-item" to={`/projects/editprojects/${project._id}`}><i className="ri-edit-2-line align-bottom me-2 text-muted"></i> Edit</Link></li>
                                                        <li><Link className="dropdown-item" data-bs-toggle="modal" to="#deleteRecordModal" onClick={() => setProjectToDelete(project._id)}><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i> Delete</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="card-text text-muted text-truncate" style={{ whiteSpace: "normal" }}>Customer: {project.customer}</p>
                                        <p className="card-text text-muted text-truncate" style={{ whiteSpace: "normal" }}>Start: {project.start_date}</p>
                                        <p className="card-text text-muted text-truncate" style={{ whiteSpace: "normal" }}>End: {project.end_date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Delete Modal */}
                <div className="modal fade zoomIn" id="deleteRecordModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="delete-btn-close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mt-2 text-center">
                                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{ width: "100px", height: "100px" }}></lord-icon>
                                    <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                                        <h4>Are you sure?</h4>
                                        <p className="text-muted mx-4 mb-0">Are you sure you want to remove this project?</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                                    <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn w-sm btn-danger" onClick={handleDeleteProject}>Yes, Delete It!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
