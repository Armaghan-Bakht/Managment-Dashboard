
const TaskLish = () => {
    return (
        <>

            <div className="main-content ">
                {/* <!--& project detail  --> */}
                <div className="page-content " >
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                <div>
                                    <h4 className="fs-16 fw-semibold mb-1 mb-md-1">Project List</h4>
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="../projects/taskboard.html">project-task</a></li>
                                        <li className="breadcrumb-item active">project-List</li>
                                    </ol>
                                </div>
                                <div className="page-title-right d-flex gap-2" data-bs-toggle="modal" data-bs-target="#creatertaskModal">
                                    <a className="btn btn-primary d-flex gap-2 align-items-center " style={{ fontWeight: "500" }} >Add List</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <!-- & Project List --> */}

                        <table id="datatable" className="table table-hover table-bordered table-striped dt-responsive nowrap" style={{ borderCollapse: "collapse", borderSpacing: "0", width: "100%" }}>
                            <thead>
                                <tr>
                                    <th>Task Name</th>
                                    <th>Start Date</th>
                                    <th>Due Date</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Web Design</td>
                                    <td>2024-01-01</td>
                                    <td className="text-danger">2024-06-30</td>
                                    <td className="text-center"> <span className="bg-danger" style={{ color: "white", fontWeight: "bold", padding: "2px 14px", borderRadius: "5px", fontSize: "smaller" }}>High</span></td>
                                    <td className="text-center"><span className="bg-primary" style={{ color: "white", fontWeight: "bold", padding: "2px 15px", borderRadius: "5px", fontSize: "smaller" }}>Accepted</span></td>
                                </tr>
                                <tr>
                                    <td>Dashboard</td>
                                    <td>2024-01-01</td>
                                    <td className="text-danger">2024-06-30</td>
                                    <td className="text-center"> <span className="bg-danger" style={{ color: "white", fontWeight: "bold", padding: "2px 14px", borderRadius: "5px", fontSize: "smaller" }}>High</span></td>
                                    <td className="text-center"><span className="bg-info" style={{ color: "white", fontWeight: "bold", padding: "2px 15px", borderRadius: "5px", fontSize: "smaller" }}>On Going</span></td>
                                </tr>
                                <tr>
                                    <td>Mobile App</td>
                                    <td>2024-01-01</td>
                                    <td className="text-danger">2024-06-30</td>
                                    <td className="text-center"> <span className="bg-primary" style={{ color: "white", fontWeight: "bold", padding: "2px 15px", borderRadius: "5px", fontSize: "smaller" }}>low</span></td>
                                    <td className="text-center"><span className="bg-warning" style={{ color: "white", fontWeight: "bold", padding: "2px 15px", borderRadius: "5px", fontSize: "smaller" }}>Pending</span></td>
                                </tr>
                                <tr>
                                    <td>Landing page</td>
                                    <td>2024-01-01</td>
                                    <td className="text-danger">2024-06-30</td>
                                    <td className="text-center"> <span className="bg-primary" style={{ color: "white", fontWeight: "bold", padding: "2px 15px", borderRadius: "5px", fontSize: "smaller" }}>low</span></td>
                                    <td className="text-center"><span className="bg-danger" style={{ color: "white", fontWeight: "bold", padding: "2px 15px", borderRadius: "5px", fontSize: "smaller" }}>Rejected</span></td>
                                </tr>


                            </tbody>
                        </table>


                    </div>
                </div>
                {/* <!-- & models -->
           
            <!-- ! add task --> */}
                <div className="modal fade" id="creatertaskModal" tabIndex="-1" aria-labelledby="creatertaskModalLabel" style={{ display: "none" }} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content border-0">
                            <div className="modal-header p-3 bg-soft-info">
                                <h5 className="modal-title" id="creatertaskModalLabel">Create New Task</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="#">
                                    <div className="row g-3">
                                        <div className="col-lg-12">
                                            <label htmlFor="projectName" className="form-label">Project Name</label>
                                            <input type="text" className="form-control" id="projectName" placeholder="Enter project name" />
                                        </div>
                                        {/* <!--end col--> */}
                                        <div className="col-lg-6">
                                            <label htmlFor="sub-tasks" className="form-label">Task Title</label>
                                            <input type="text" className="form-control" id="sub-tasks" placeholder="Task title" />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="sub-tasks" className="form-label">Select Client</label>
                                            <input type="text" className="form-control" id="sub-tasks" placeholder="Mark" />
                                        </div>
                                        {/* <!--end col--> */}
                                        <div className="col-lg-12">
                                            <label htmlFor="task-description" className="form-label">Task Description</label>
                                            <textarea className="form-control" id="task-description" rows="3" placeholder="Task description"></textarea>
                                        </div>
                                        {/* <!--end col--> */}

                                        {/* <!--end col--> */}
                                        <div className="col-lg-3">
                                            <label htmlFor="due-date" className="form-label">Start Date</label>
                                            <input type="text" className="form-control" id="due-date" data-provider="flatpickr" placeholder="Select date" />
                                        </div>
                                        {/* <!--end col--> */}
                                        <div className="col-lg-3">
                                            <label htmlFor="due-date" className="form-label">Due Date</label>
                                            <input type="text" className="form-control" id="due-date" data-provider="flatpickr" placeholder="Select date" />
                                        </div>
                                        <div className="col-lg-3">
                                            <label htmlFor="due-date" className="form-label">Priority</label>
                                            <select className="form-select ">
                                                <option value="">Select Status</option>
                                                <option value="active">High</option>
                                                <option value="inactive">Low</option>

                                            </select>

                                        </div>
                                        <div className="col-lg-3">
                                            <label htmlFor="due-date" className="form-label">Task</label>
                                            <select className="form-select ">
                                                <option value="">Select Status</option>
                                                <option value="active">New</option>
                                                <option value="inactive">Old</option>

                                            </select>

                                        </div>
                                        <div className="mt-4">
                                            <div className="hstack gap-2 justify-content-end">
                                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-success">Add Task</button>
                                            </div>
                                        </div>
                                        {/* <!--end col--> */}
                                    </div>
                                    {/* <!--end row--> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ! delete task --> */}
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
                                        <h4>Are you sure ?</h4>
                                        <p className="text-muted mx-4 mb-0">Are you sure you want to remove this tasks ?</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                                    <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn w-sm btn-danger" id="delete-record">Yes, Delete It!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TaskLish