import { useState, useEffect } from 'react';
import axios from 'axios';
import img from "../../assets/images/users/avatar-1.png";
import VITE_APP_API_URL from '../../../config/config';



const EmployeReport = () => {
    const [users, setUsers] = useState([]);

    // Fetch users data when the component mounts
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersResponse = await axios.get(`${VITE_APP_API_URL}/auth/api/users`);
                setUsers(usersResponse.data.users); // Store the users data in state
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
            {/* Start right Content here */}
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xxl-9">
                                {/* Employee Report */}
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card" style={{ height: "495px", overflow: "hidden auto" }} data-simplebar="init">
                                            <div className="card-header">
                                                <div className="card-icon text-muted"><i className="fas fa-sync-alt fs-14"></i></div>
                                                <h3 className="card-title">Employee Progress</h3>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-responsive-md">
                                                    <table className="table text-nowrap mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Employee ID</th>
                                                                <th>Name</th>
                                                                <th>Image</th>
                                                                <th>Email</th>
                                                                <th>Department</th>
                                                                <th>Designation</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {users.length === 0 ? (
                                                                <tr>
                                                                    <td colSpan="7" className="text-center">No users found</td>
                                                                </tr>
                                                            ) : (
                                                                users.map((user, index) => (
                                                                    <tr key={user._id}>
                                                                        <td className="align-middle">{index + 1}</td> {/* Employee ID */}
                                                                        <td className="align-middle">{user.name}</td>
                                                                        <td className="align-middle">
                                                                            <img src={img} alt="Avatar image" className="avatar-2xs" />
                                                                        </td>
                                                                        <td className="align-middle">{user.email}</td>
                                                                        <td className="align-middle">{user.department_id ? user.department_id.name : 'N/A'}</td> {/* Department Name */}
                                                                        <td className="align-middle">{user.designation_id ? user.designation_id.name : 'N/A'}</td> {/* Designation Name */}
                                                                        <td className="align-middle">
                                                                            <i className="marker marker-dot m-0 me-2 text-primary"></i> Active
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end container-fluid */}
                </div>
            </div>
        </>
    );
}

export default EmployeReport;







