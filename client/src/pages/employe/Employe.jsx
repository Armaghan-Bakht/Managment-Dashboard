import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import avatar1 from "../../assets/images/avatar-1.jpg";
import VITE_APP_API_URL from '../../../config/config';

const Index = () => {
    const [users, setUsers] = useState([]);

    // Fetch users from the API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/auth/api/users`);
                setUsers(response.data.users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    // Function to delete a user
// Function to delete a user
const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${VITE_APP_API_URL}/auth/api/delete/${userId}`);
        if (response.status === 200) {
            // Remove the deleted user from the state to update the UI
            setUsers(users.filter(user => user._id !== userId));
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete the user');
    }
};


    return (
        <>
            <div>
                <div id="layout-wrapper">
                    <div className="main-content">
                        <div className="page-content px-3">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h2 className="card-title text-muted text-truncate" style={{ fontWeight: "bolder", fontSize: "25px" }}>Employee Table</h2>
                                    <Link to="/employe/createEmploye" className="btn bg-primary text-white d-flex align-items-center" style={{ fontWeight: "bold", fontSize: "15px" }}>Add Employee</Link>
                                </div>
                                <div className="row dt-row">
                                    <div className="col-sm-12">
                                        <table id="datatable" className="table table-hover table-auto table-bordered table-striped dt-responsive nowrap dataTable no-footer dtr-inline">
                                            <thead>
                                                <tr />
                                                <th className="sorting py-2 border px-2" tabIndex="0">Employe Id</th>
                                                <th className="sorting py-2 border px-2" tabIndex="0">Image</th>
                                                <th className="sorting sorting_desc py-2 border px-2" tabIndex="0">Name</th>
                                                <th className="sorting sorting_desc py-2 border px-2" tabIndex="0">Email</th>
                                                <th className="sorting sorting_desc py-2 border px-2" tabIndex="0">Department</th>
                                                <th className="sorting sorting_desc py-2 border px-2" tabIndex="0">Designation</th>
                                                <th className="sorting sorting_desc py-2 border px-2" tabIndex="0">Status</th>
                                                <th className="sorting sorting_desc py-2 border px-2" tabIndex="0">Action</th>
                                            </thead>
                                            <tbody>
                                                {users.map((user, index) => (
                                                    <tr key={user._id}>
                                                        <td className="text-center" style={{ fontWeight: "bolder" }}>{index + 1}</td>
                                                        <td><img src={avatar1} alt="" style={{ width: "38px", height: "38px", borderRadius: "50%" }} /></td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.department || 'N/A'}</td>
                                                        <td>{user.designation || 'N/A'}</td>
                                                        <td>{user.status || 'Active'} <i className="fas fa-circle" style={{ fontSize: "10px", color: "green" }}></i></td>
                                                        <td>
                                                            <div className="d-flex gap-2">
                                                            <Link to={`/employe/editEmploye/${user._id}`} className="btn bg-primary text-white">Edit</Link>


                                                                <button onClick={() => deleteUser(user._id)} className="btn bg-danger text-white">Delete</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;





















