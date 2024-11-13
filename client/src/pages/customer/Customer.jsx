import { useEffect, useState } from 'react';
import axios from 'axios';
import VITE_APP_API_URL from '../../../config/config';

const Customer = () => {
    const [customers, setCustomers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [type, setType] = useState('user');
    const [contactPhone, setContactPhone] = useState('');
    const [reference, setReference] = useState('');

    
    // Fetch customers from the API
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/api/customer`);
                setCustomers(response.data);
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        };
        fetchCustomers();
    }, []);

    const handleAddCustomer = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
    
        const customerData = { name, contact_email: email, contact_phone: contactPhone, password, reference, type };
    
        try {
            const response = await axios.post(`${VITE_APP_API_URL}/api/customer`, customerData);
            setCustomers([...customers, response.data]);
            resetForm();
            document.getElementById('modal8').classList.remove('show');
        } catch (error) {
            console.error("Error adding customer:", error);
            alert("Failed to add customer.");
        }
    };

    const handleDeleteCustomer = async (customerId) => {
        try {
            await axios.delete(`${VITE_APP_API_URL}/api/customer/${customerId}`);
            setCustomers(customers.filter(customer => customer._id !== customerId)); // Remove deleted customer from state
        } catch (error) {
            console.error("Error deleting customer:", error);
            alert("Failed to delete customer.");
        }
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setType('user');
        setContactPhone('');
        setReference('');
    };

    return (
        <div className="main-content">
            <div className="page-content px-3">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h2 className="card-title text-muted text-truncate" style={{ fontWeight: "bolder", fontSize: "25px" }}>
                            Customers Table
                        </h2>
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal8"
                            style={{ width: "140px", padding: "10px 0", fontWeight: "bold", fontSize: "larger" }}>
                            Add Customers
                        </button>
                    </div>
                    <div className="row dt-row">
                        <div className="col-sm-12">
                            <table className="table table-hover table-auto table-bordered table-striped dt-responsive nowrap dataTable no-footer dtr-inline"
                                style={{ borderCollapse: "collapse", borderSpacing: "0px", width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th className="border py-2 px-2">Employe Id</th>
                                        <th className="border py-2 px-2">Name</th>
                                        <th className="border py-2 px-2">Email</th>
                                        <th className="border py-2 px-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody style={{ fontWeight: "lighter" }}>
                                    {customers.length > 0 ? (
                                        customers.map((customer, index) => (
                                            <tr key={customer._id}>
                                                <td className="text-center" style={{ fontWeight: "bolder" }}>{index + 1}</td>
                                                <td>{customer.name}</td>
                                                <td>{customer.contact_email}</td>
                                                <td className="text-center">
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => handleDeleteCustomer(customer._id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center">No customers found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Add Customers Modal */}
                <div className="modal fade" id="modal8" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Customers</h5>
                                <button type="button" className="btn btn-sm btn-label-danger btn-icon" data-bs-dismiss="modal">
                                    <i className="mdi mdi-close"></i>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleAddCustomer}>
                                    <div>
                                        <label className="form-label mb-2" htmlFor="name">Name</label>
                                        <input
                                            className="form-control mb-2"
                                            id="name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                        <label className="form-label mb-2" htmlFor="email">Email</label>
                                        <input
                                            className="form-control mb-2"
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <label className="form-label mb-2" htmlFor="contactPhone">Contact Phone</label>
                                        <input
                                            className="form-control mb-2"
                                            id="contactPhone"
                                            type="text"
                                            value={contactPhone}
                                            onChange={(e) => setContactPhone(e.target.value)}
                                            required
                                        />
                                        <label className="form-label mb-2" htmlFor="password">Password</label>
                                        <input
                                            className="form-control mb-2"
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <label className="form-label mb-2" htmlFor="confirmPassword">Confirm Password</label>
                                        <input
                                            className="form-control"
                                            id="confirmPassword"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                        <label className="form-label mb-2" htmlFor="reference">Reference</label>
                                        <input
                                            className="form-control mb-2"
                                            id="reference"
                                            type="text"
                                            value={reference}
                                            onChange={(e) => setReference(e.target.value)}
                                            required
                                        />
                                        <label className="form-label mb-2" htmlFor="type">Customer Type</label>
                                        <select
                                            className="form-control mb-2"
                                            id="type"
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}
                                            required
                                        >
                                            <option value="user">User</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;







