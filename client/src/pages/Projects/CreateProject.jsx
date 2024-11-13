import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import VITE_APP_API_URL from '../../../config/config';


const CreateProject = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [customer, setCustomer] = useState('');
    const [status, setStatus] = useState('');
    const [team, setTeam] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [customers, setCustomers] = useState([]); // State to store customer list

    // Fetch customers on component mount
    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/api/customer`);
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };
        fetchCustomers();
    }, []);

    const handleCreateProject = async (e) => {
        e.preventDefault();

        const projectData = {
            name,
            description,
            start_date: startDate,
            end_date: endDate,
            team,
            status,
            customer_id: customer,
            amount
        };

        if (!name || !customer || !status || !team || !startDate || !amount || !description) {
            alert('Please fill in all required fields.');
            return;
        }


        // Log the projectData to check values before the request
        console.log("Project Data:", projectData);

        try {
            const response = await axios.post(`${VITE_APP_API_URL}/api/project`, projectData);
            console.log('Project created:', response.data);
            navigate('/projects');
        } catch (error) {
            console.error('Error creating project:', error);
            if (error.response) {
                console.error('Server responded with:', error.response.data);
            }
        }
    };


    return (
        <div className="main-content d-flex justify-content-center mt-4">
            <div className="page-content px-3 w-50">
                <div className="card p-3">
                    <div className="d-grid gap-3">
                        <div className="card-header d-flex justify-content-between">
                            <h2 className="card-title text-muted text-truncate" style={{ fontWeight: 'bolder', fontSize: '20px' }}>Create Project</h2>
                        </div>
                        <form onSubmit={handleCreateProject}>
                            <div className="px-2">
                                <label htmlFor="projectTitle" className="form-label">Project Title</label>
                                <input
                                    id="projectTitle"
                                    type="text"
                                    className="form-control form-control-lg"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="px-2">
                                <label htmlFor="customer" className="form-label">Customer</label>
                                <select
                                    id="customer"
                                    className="form-select form-select-lg"
                                    value={customer}
                                    onChange={(e) => setCustomer(e.target.value)}
                                    required
                                >
                                    <option value="">Select Customer</option>
                                    {customers.map((cust) => (
                                        <option key={cust._id} value={cust._id}>
                                            {cust.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* Other form fields */}
                            <div className="d-flex justify-content-evenly gap-4 px-3">
                                <div className="d-flex flex-column w-100">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <select
                                        id="team"
                                        className="form-select form-select-lg"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        required
                                    >
                                        <option value="">Select Status</option>
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                                <div className="d-flex flex-column w-100">
                                    <label htmlFor="team" className="form-label">Team</label>
                                    <select
                                        id="team"
                                        className="form-select form-select-lg"
                                        value={team}
                                        onChange={(e) => setTeam(e.target.value)}
                                        required
                                    >
                                        <option value="">Select Team</option>
                                        <option value="full-time">Full-time</option>
                                        <option value="part-time">Part-time</option>
                                        <option value="contract">Contract</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex justify-content-evenly gap-4 px-3">
                                <div className="d-flex flex-column w-100">
                                    <label htmlFor="startDate" className="form-label">Start Date</label>
                                    <input
                                        id="startDate"
                                        type="date"
                                        className="form-control form-control-lg"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="d-flex flex-column w-100">
                                    <label htmlFor="endDate" className="form-label">End Date</label>
                                    <input
                                        id="endDate"
                                        type="date"
                                        className="form-control form-control-lg"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="d-flex flex-column px-3">
                                <label htmlFor="amount" className="form-label">Amount</label>
                                <input
                                    id="amount"
                                    type="number"
                                    className="form-control form-control-lg"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="d-flex flex-column px-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    id="description"
                                    className="form-control form-control-lg"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <button type="submit" className="btn bg-primary text-white px-3">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProject;










