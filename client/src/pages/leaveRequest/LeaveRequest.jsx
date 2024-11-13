import { useState, useEffect } from 'react';
import axios from 'axios';
import VITE_APP_API_URL from '../../../config/config';

const LeaveRequest = () => {
    const [users, setUsers] = useState([]);
    const [leaveRequests, setLeaveRequests] = useState([]);
    const [formData, setFormData] = useState({
        user_id: '',
        start_date: '',
        end_date: '',
        reason: '',
        leave_type: ''
    });

    useEffect(() => {
        // Fetch users for the dropdown
        axios.get(`${VITE_APP_API_URL}/auth/api/users`)
            .then(response => {
                if (Array.isArray(response.data.users)) {
                    setUsers(response.data.users);
                } else {
                    console.error('Unexpected response format:', response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });

        // Fetch leave requests for the table
        axios.get(`${VITE_APP_API_URL}/api/leave`)
            .then(response => {
                if (Array.isArray(response.data.leaveRequests)) {
                    setLeaveRequests(response.data.leaveRequests);
                } else {
                    console.error('Unexpected response format:', response.data);
                }
            })
            .catch(error => {
                console.error('Error fetching leave requests:', error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${VITE_APP_API_URL}/api/leave`, formData)
            .then(response => {
                alert('Leave request created successfully');
                console.log(response.data);
            })
            .catch(error => {
                alert('Error creating leave request');
                console.error('Error details:', error.response ? error.response.data : error);
                if (error.response) {
                    console.log('Error message from backend:', error.response.data.message);
                }
            });
    };

    return (
        <>
            <div className="main-content">
                <div className="page-content px-3">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <h2 className="card-title text-muted text-truncate" style={{ fontWeight: "bolder", fontSize: "25px" }}>Leave Request</h2>
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal8" style={{ width: "140px", padding: "10px 0", fontWeight: "bold", fontSize: "larger" }}>Make Request</button>
                        </div>
                        
                        {/* Leave Requests Table */}
                        <div className="row dt-row">
                            <div className="col-sm-12">
                                <table className="table table-hover table-auto table-bordered table-striped dt-responsive nowrap dataTable no-footer dtr-inline" style={{ borderCollapse: "collapse", borderSpacing: "0px", width: "100%" }} aria-describedby="datatable_info">
                                    <thead>
                                        <tr>
                                            <th>Employee ID</th>
                                            <th>Name</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Days</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
    {leaveRequests.length > 0 ? (
        leaveRequests.map((leave, index) => {
            const startDate = new Date(leave.start_date);
            const endDate = new Date(leave.end_date);
            const leaveDays = Math.ceil((endDate - startDate) / (1000 * 3600 * 24)) + 1; // +1 to include the end date

            return (
                <tr key={leave._id}>
                    <td className="text-center" style={{ fontWeight: "bolder" }}>{index + 1}</td> {/* Display sequential employee ID */}
                    <td>{leave.user_id.name}</td> {/* Display user name */}
                    <td>{startDate.toLocaleDateString()}</td>
                    <td>{endDate.toLocaleDateString()}</td>
                    <td>{leaveDays}</td> {/* Display calculated leave days */}
                    <td>{leave.status}</td>
                </tr>
            );
        })
    ) : (
        <tr>
            <td colSpan="6" className="text-center">No leave requests found</td>
        </tr>
    )}
</tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    
                    {/* Modal for adding leave request */}
                    <div className="modal fade" id="modal8" style={{ display: "none", marginTop: "20px" }} aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Leave</h5>
                                    <button type="button" className="btn btn-sm btn-label-danger btn-icon" data-bs-dismiss="modal"><i className="mdi mdi-close"></i></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        {/* User Dropdown */}
                                        <label className="form-label mb-2" htmlFor="user_id">Employee</label>
                                        <select
                                            className="form-select mb-2"
                                            name="user_id"
                                            value={formData.user_id}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select User</option>
                                            {users.map(user => (
                                                <option key={user._id} value={user._id}>
                                                    {user.name}  {user.employee_id}
                                                </option>
                                            ))}
                                        </select>

                                        {/* Other fields for leave request */}
                                        <label className="form-label mb-2" htmlFor="start_date">From</label>
                                        <input className="form-control mb-2" id="start_date" type="date" name="start_date" value={formData.start_date} onChange={handleInputChange} required />
                                        <label className="form-label mb-2" htmlFor="end_date">To</label>
                                        <input className="form-control mb-2" id="end_date" type="date" name="end_date" value={formData.end_date} onChange={handleInputChange} required />
                                        <label className="form-label mb-2" htmlFor="leave_type">Leave Type</label>
                                        <select className="form-select mb-2" name="leave_type" value={formData.leave_type} onChange={handleInputChange} required>
                                            <option value="">Select Leave Type</option>
                                            <option value="Sick Leave">Sick Leave</option>
                                            <option value="Casual Leave">Casual Leave</option>
                                            <option value="Marriage Leave">Marriage Leave</option>
                                            <option value="Holiday">Holiday</option>
                                        </select>
                                        <label className="form-label mb-2" htmlFor="reason">Reason</label>
                                        <textarea className="form-control mb-2" name="reason" value={formData.reason} onChange={handleInputChange} required></textarea>
                                        <div className="modal-footer">
                                            <button className="btn btn-primary" type="submit">Submit</button>
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

export default LeaveRequest;



