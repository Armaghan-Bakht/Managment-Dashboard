
const LeaveType = () => {
    return (
        <>

            <div className="main-content ">
                {/* <!--& project detail  --> */}
                <div className="page-content " >
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between px-3">
                                <div>
                                    <h4 className="fs-16 fw-semibold mb-1 mb-md-1">Leave Type</h4>
                                </div>
                                <div className="page-title-right d-flex gap-2" data-bs-toggle="modal" data-bs-target="#creatertaskModal">
                                    <a className="btn btn-primary d-flex gap-2 align-items-center " style={{ fontWeight: "500" }} >Add Leave Type</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <!-- & Project List --> */}

                        <table id="datatable" className="table table-hover table-bordered table-striped dt-responsive nowrap" style={{ borderCollapse: "collapse", "borderSpacing": "0", width: "100%" }}>
                            <thead>
                                <tr />
                                <th className="py-2 px-2 border">Id</th>
                                <th className="py-2 px-2 border">Reason</th>
                                <th className="py-2 px-2 border">Status</th>
                                <th className="py-2 px-2 border">Start Date</th>
                                <th className="py-2 px-2 border">End Date</th>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>1578</td>
                                    <td>Illnes</td>
                                    <td className="text-center">Approved</td>
                                    <td className="text-center">2024-08-01</td>
                                    <td className="text-center">2024-08-05</td>
                                </tr>
                                <tr>
                                    <td>1578</td>
                                    <td>Illnes</td>
                                    <td className="text-center">Approved</td>
                                    <td className="text-center">2024-08-01</td>
                                    <td className="text-center">2024-08-05</td>


                                </tr>
                                <tr>
                                    <td>1578</td>
                                    <td>Illnes</td>
                                    <td className="text-center">Approved</td>
                                    <td className="text-center">2024-08-01</td>
                                    <td className="text-center">2024-08-05</td>


                                </tr>
                                <tr>
                                    <td>1578</td>
                                    <td>Illnes</td>
                                    <td className="text-center">Approved</td>
                                    <td className="text-center">2024-08-01</td>
                                    <td className="text-center">2024-08-05</td>

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
                                <h5 className="modal-title" id="creatertaskModalLabel">Create Leave Type</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form action="#">
                                    <div className="row g-3">
                                        <div className="col-lg-12">
                                            <label htmlFor="projectName" className="form-label">Reason</label>
                                            <input type="text" className="form-control" id="projectName" placeholder="Enter Reason" />
                                        </div>
                                        {/* <!--end col--> */}
                                        <div className="col-lg-12">
                                            <label htmlFor="sub-tasks" className="form-label">Status</label>
                                            <select className="form-select ">
                                                <option value="">Select Status</option>
                                                <option value="active">Approved</option>
                                                <option value="inactive">Pending</option>
                                                <option value="inactive">Rejected</option>

                                            </select>
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="due-date" className="form-label">Start Date</label>
                                            <input type="text" className="form-control" id="due-date" data-provider="flatpickr" placeholder="Select date" />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="due-date" className="form-label">Start Date</label>
                                            <input type="text" className="form-control" id="due-date" data-provider="flatpickr" placeholder="Select date" />
                                        </div>
                                        <div className="mt-4">
                                            <div className="hstack gap-2 justify-content-end">
                                                <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-success">Add</button>
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
                                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{ Fwidth: "100px", height: "100px" }}></lord-icon>
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

            <div className="custom-setting bg-primary pe-0 d-flex flex-column rounded-start">
                <button type="button" className="btn btn-wide border-0 text-white fs-20 avatar-sm rounded-end-0" id="light-dark-mode">
                    <i className="mdi mdi-brightness-7 align-middle"></i>
                    <i className="mdi mdi-white-balance-sunny align-middle"></i>
                </button>
            </div>


        </>
    )
}

export default LeaveType