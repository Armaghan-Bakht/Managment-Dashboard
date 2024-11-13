import { Link } from "react-router-dom"

const TaskBoard = () => {
    return (
        <>

            {/* <!-- Start right Content here --> */}

            <div className="main-content ">
                {/* <!--& project detail  --> */}
                <div className="page-content " >
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                <div>
                                    <h4 className="fs-16 fw-semibold mb-1 mb-md-1">Project Task</h4>
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="../projects/projects.html">projects</a></li>
                                        <li className="breadcrumb-item"><a href="../projects/projectDetails.html">project-details</a></li>
                                        <li className="breadcrumb-item active">project-task</li>
                                    </ol>
                                </div>
                                <div className="page-title-right">
                                    <Link to="/projects/taskList" className="btn btn-primary d-flex gap-2 align-items-center " style={{ fontWeight: "500" }} >Task List</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card">
                            <div className="card-body">
                                <div className="row g-2">
                                    <div className="col-auto">
                                        <div className="search-box">
                                            <input type="text" className="form-control search" id="search-task-options" placeholder="Search for project, tasks..." />
                                            <i className="fab fa-sistrix search-icon"></i>
                                        </div>
                                    </div>

                                    <div className="col-lg-auto ms-sm-auto">
                                        <div className="hstack gap-2">
                                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createboardModal"><i className="ri-add-line align-bottom me-1"></i> New Board</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- & kanban board --> */}
                        <div className="col-xl-9 w-100"  >
                            <div className="tasks-board mb-3 " id="kanbanboard" >
                                <div className="tasks-list " style={{ marginRight: "-10px" }}>
                                    <div className="d-flex mb-3 " >
                                        <div className="flex-grow-1">
                                            <h6 className="fs-14 text-uppercase fw-semibold mb-0">started</h6>
                                        </div>

                                    </div>
                                    <div
                                        data-simplebar="init"
                                        className="tasks-wrapper px-3 mx-n3"
                                        style={{ width: '90%' }}
                                    >
                                        <div className="simplebar-wrapper" style={{ margin: '0px -16px' }}>
                                            <div className="simplebar-height-auto-observer-wrapper">
                                                <div className="simplebar-height-auto-observer"></div>
                                            </div>
                                            <div className="simplebar-mask">
                                                <div
                                                    className="simplebar-offset"
                                                    style={{ right: '-17px', bottom: '0px' }}
                                                >
                                                    <div
                                                        className="simplebar-content-wrapper"
                                                        style={{ height: 'auto', overflow: 'hidden scroll' }}
                                                    >
                                                        <div
                                                            className="simplebar-content"
                                                            style={{ padding: '0px 16px' }}
                                                        >
                                                            <div id="unassigned-task" className="tasks">
                                                                <div className="card tasks-box">
                                                                    <div className="card-body">
                                                                        <div className="d-flex justify-content-between mb-2">
                                                                            <div>
                                                                                <span className="bg-danger" style={{ color: "white", fontWeight: "bold", padding: "2px 10px", borderRadius: "5px", fontSize: "smaller" }}>high</span>
                                                                            </div>
                                                                            <div className="dropdown">
                                                                                <a href="javascript:void(0);" className="text-muted" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
                                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                                                    <li><a className="dropdown-item" href="#!"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li>
                                                                                    <li><a className="dropdown-item" href="#!"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i> Edit</a></li>
                                                                                    <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i> Delete</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <h5 className="text-muted">Web Design</h5 >
                                                                        <p className="card-text text-muted text-truncate">Task: New</p>
                                                                        <p className="card-text text-muted text-truncate">Start: 2024-01-01</p>
                                                                        <p className="card-text text-muted text-truncate">End: 2024-06-30</p>
                                                                    </div>
                                                                    {/* <!--end card-body--> */}
                                                                </div>
                                                                {/* <!--end card--> */}
                                                                <div className="card tasks-box">
                                                                    <div className="card-body">
                                                                        <div className="d-flex justify-content-between mb-2">
                                                                            <div>
                                                                                <span className="bg-primary" style={{ color: "white", fontWeight: "bold", padding: "2px 10px", borderRadius: "5px", fontSize: "smaller" }}>low</span>
                                                                            </div>
                                                                            <div className="dropdown">
                                                                                <a href="javascript:void(0);" className="text-muted" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
                                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                                                    <li><a className="dropdown-item" href="#!"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li>
                                                                                    <li><a className="dropdown-item" href="#!"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i> Edit</a></li>
                                                                                    <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i> Delete</a></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <h5 className="text-muted">App Development</h5 >
                                                                        <p className="card-text text-muted text-truncate">Task: Old</p>
                                                                        <p className="card-text text-muted text-truncate">Start: 2024-02-01</p>
                                                                        <p className="card-text text-muted text-truncate">End: 2024-06-30</p>
                                                                    </div>
                                                                    {/* <!--end card-body--> */}
                                                                </div>
                                                                {/* <!--end card--> */}
                                                            </div>
                                                            {/* <!--end tasks--> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="simplebar-placeholder" style={{ width: "auto", height: "399px" }}></div>
                                        </div>
                                        <div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
                                            <div className="simplebar-scrollbar" style={{
                                                transform: 'translate3d(0px, 0px, 0px)',
                                                display: 'none',
                                            }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}>
                                            <div className="simplebar-scrollbar" style={{
                                                height: '89px',
                                                transform: 'translate3d(0px, 0px, 0px)',
                                                display: 'block',
                                            }}></div></div></div>
                                    <div className="my-3">
                                        <button className="btn btn-label-info " style={{ width: "81%" }} data-bs-toggle="modal" data-bs-target="#creatertaskModal">Add More</button>
                                    </div>
                                </div>
                                {/* <!--end tasks-list--> */}
                                <div className="tasks-list " style={{ marginRight: "-10px" }}>
                                    <div className="d-flex mb-3">
                                        <div className="flex-grow-1">
                                            <h6 className="fs-14 text-uppercase fw-semibold mb-0">On Going</h6>
                                        </div>

                                    </div>
                                    <div data-simplebar="init" className="tasks-wrapper px-3 mx-n3" style={{ width: "90%" }}><div className="simplebar-wrapper" style={{ margin: "0px -16px" }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask">
                                        <div className="simplebar-offset" style={{ right: "-17px", bottom: "0px" }}>
                                            <div className="simplebar-content-wrapper" style={{ height: "auto", overflow: "hidden scroll" }}>
                                                <div className="simplebar-content" style={{ padding: "0px 16px" }}>
                                                    <div id="todo-task" className="tasks">
                                                        <div className="card tasks-box">
                                                            <div className="card-body">
                                                                <div className="d-flex justify-content-between mb-2">
                                                                    <div>
                                                                        <span className="bg-danger" style={{ color: "white", fontWeight: "bold", padding: "2px 10px", borderRadius: "5px", fontSize: "smaller" }}>high</span>
                                                                    </div>
                                                                    <div className="dropdown">
                                                                        <a href="javascript:void(0);" className="text-muted" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
                                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                                            <li><a className="dropdown-item" href="#!"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li>
                                                                            <li><a className="dropdown-item" href="#!"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i> Edit</a></li>
                                                                            <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i> Delete</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <h5 className="text-muted">Dashboard</h5 >
                                                                <p className="card-text text-muted text-truncate">Task: New</p>
                                                                <p className="card-text text-muted text-truncate">Start: 2024-01-01</p>
                                                                <p className="card-text text-muted text-truncate">End: 2024-06-30</p>
                                                            </div>
                                                            {/* <!--end card-body--> */}
                                                        </div>
                                                    </div>
                                                </div></div></div></div>
                                        <div className="simplebar-placeholder" style={{ width: "auto", height: "411px" }}></div>
                                    </div>
                                        <div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
                                            <div className="simplebar-scrollbar" style={{
                                                transform: 'translate3d(0px, 0px, 0px)',
                                                display: 'none',
                                            }}>
                                            </div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}><div className="simplebar-scrollbar" style={{ height: "86px", transform: 'translate3d(0px, 0px, 0px)', display: "block" }}></div></div></div>
                                    <div className="my-3">
                                        <button className="btn btn-label-info " style={{ width: "81%" }} data-bs-toggle="modal" data-bs-target="#creatertaskModal">Add More</button>
                                    </div>
                                </div>
                                {/* <!--end tasks-list--> */}

                                <div className="tasks-list">
                                    <div className="d-flex mb-3">
                                        <div className="flex-grow-1">
                                            <h6 className="fs-14 text-uppercase fw-semibold mb-0">Completed</h6>
                                        </div>

                                    </div>
                                    <div data-simplebar="init" className="tasks-wrapper px-3 mx-n3" style={{ width: "90%" }}><div className="simplebar-wrapper" style={{ margin: "0px -16px;" }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask"><div className="simplebar-offset" style={{ right: "-17px", bottom: "0px" }}><div className="simplebar-content-wrapper" style={{ height: "auto", overflow: "hidden scroll" }}><div className="simplebar-content" style={{ padding: "0px 16px" }}>
                                        <div id="inprogress-task" className="tasks">
                                            <div className="card tasks-box">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <div>
                                                            <span className="bg-primary" style={{ color: "white", fontWeight: "bold", padding: "2px 10px", borderRadius: "5px", fontSize: "smaller" }}>low</span>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a href="javascript:void(0);" className="text-muted" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
                                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                                <li><a className="dropdown-item" href="#!"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li>
                                                                <li><a className="dropdown-item" href="#!"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i> Edit</a></li>
                                                                <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i> Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h5 className="text-muted">Mobile App</h5 >
                                                    <p className="card-text text-muted text-truncate">Task: New</p>
                                                    <p className="card-text text-muted text-truncate">Start: 2024-01-01</p>
                                                    <p className="card-text text-muted text-truncate">End: 2024-06-30</p>
                                                </div>
                                                {/* <!--end card-body--> */}
                                            </div>
                                        </div>
                                    </div></div></div></div><div className="simplebar-placeholder" style={{ width: "auto", height: "455px" }}></div></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}><div className="simplebar-scrollbar" style={{ transform: "translate3d(0px, 0px, 0px)", display: "none" }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}><div className="simplebar-scrollbar" style={{ height: "78px", transform: "translate3d(0px, 0px, 0px)", display: "block" }}></div></div></div>
                                    <div className="my-3">
                                        <button className="btn btn-label-info " style={{ width: "81%" }} data-bs-toggle="modal" data-bs-target="#creatertaskModal">Add More</button>
                                    </div>
                                </div>
                                {/* <!--end tasks-list--> */}

                                <div className="tasks-list">
                                    <div className="d-flex mb-3">
                                        <div className="flex-grow-1">
                                            <h6 className="fs-14 text-uppercase fw-semibold mb-0">Rejected</h6>
                                        </div>

                                    </div>
                                    <div data-simplebar="init" className="tasks-wrapper px-3 mx-n3" style={{ width: "90%" }}><div className="simplebar-wrapper" style={{ margin: "0px -16px" }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask"><div className="simplebar-offset" style={{ right: "-17px", bottom: "0px" }}><div className="simplebar-content-wrapper" style={{ height: "auto", overflow: "hidden scroll" }}><div className="simplebar-content" style={{ padding: "0px 16px" }}>
                                        <div id="inprogress-task" className="tasks">
                                            <div className="card tasks-box">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <div>
                                                            <span className="bg-primary" style={{ color: "white", fontWeight: "bold", padding: "2px 10px", borderRadius: "5px", fontSize: "smaller" }}>low</span>
                                                        </div>
                                                        <div className="dropdown">
                                                            <a href="javascript:void(0);" className="text-muted" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-ellipsis-v"></i></a>
                                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                                <li><a className="dropdown-item" href="#!"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> View</a></li>
                                                                <li><a className="dropdown-item" href="#!"><i className="ri-edit-2-line align-bottom me-2 text-muted"></i> Edit</a></li>
                                                                <li><a className="dropdown-item" data-bs-toggle="modal" href="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i> Delete</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <h5 className="text-muted">Landing Page</h5 >
                                                    <p className="card-text text-muted text-truncate">Task: Old</p>
                                                    <p className="card-text text-muted text-truncate">Start: 2024-01-01</p>
                                                    <p className="card-text text-muted text-truncate">End: 2024-06-30</p>
                                                </div>
                                                {/* <!--end card-body--> */}
                                            </div>
                                        </div>
                                    </div></div></div></div><div className="simplebar-placeholder" style={{ width: "auto", height: "455px" }}></div></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}><div className="simplebar-scrollbar" style={{ transform: "translate3d(0px, 0px, 0px)", display: "none" }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}><div className="simplebar-scrollbar" style={{ height: "78px", transform: "translate3d(0px, 0px, 0px)", display: "block" }}></div></div></div>
                                    <div className="my-3">
                                        <button className="btn btn-label-info " style={{ width: "81%" }} data-bs-toggle="modal" data-bs-target="#creatertaskModal">Add More</button>
                                    </div>
                                </div>
                                {/* <!--end tasks-list--> */}
                            </div>
                            {/* <!--end task-board--> */}
                        </div>

                    </div>
                </div>
                {/* <!-- & models -->
<!-- ! new board--> */}
                <div className="modal fade" id="createboardModal" tabIndex="-1" aria-labelledby="createboardModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content border-0">
                            <div className="modal-header p-3 bg-soft-info">
                                <h5 className="modal-title" id="createboardModalLabel">Add Board</h5>
                                <button type="button" className="btn-close" id="addBoardBtn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <label htmlFor="boardName" className="form-label">Board Name</label>
                                            <input type="text" className="form-control" id="boardName" placeholder="Enter board name" />
                                        </div>
                                        <div className="mt-4">
                                            <div className="hstack gap-2 justify-content-end">
                                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-success" id="addNewBoard">Add Board</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ! add task --> */}
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
                                        <div className="col-lg-12">
                                            <label htmlFor="due-date" className="form-label">Status</label>
                                            <select className="form-select ">
                                                <option value="">Select Status</option>
                                                <option value="active">Accepted</option>
                                                <option value="inactive">Pending</option>
                                                <option value="inactive">Rejected</option>

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
            </div >
            {/* <!-- End Page-content --> */}

        </>
    )
}

export default TaskBoard