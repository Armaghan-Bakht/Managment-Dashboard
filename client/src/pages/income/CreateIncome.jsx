import { useState, useEffect } from 'react';
import axios from 'axios';
import VITE_APP_API_URL from '../../../config/config';

const CreateIncome = () => {
    const [projects, setProjects] = useState([]);
    const [formData, setFormData] = useState({
        project_id: '',
        title: '',
        amount: '',
        currency: '',
        project_expense: '',
        recieved_amount: '',
        recieved_amount_currency: '',
        tax_amount: '',
        tax_currency: '',
        fee_amount: '',
        fee_currency: '',
        status: 'Pending',
        start_date: '',  // Add start_date
    });

    // Fetch projects from the backend API
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/api/project`);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // You can allow 0 as a valid value now, so no additional checks are required
        try {
            const response = await axios.post(`${VITE_APP_API_URL}/api/income`, formData);
            console.log('Income created:', response.data);
            alert('Income created successfully!');
        } catch (error) {
            console.error('Error creating income:', error);
            if (error.response) {
                console.error('Error response:', error.response.data);
                alert(error.response.data.message || 'Error creating income.');
            }
        }
    };
    


    return (
        <div id="layout-wrapper">
            <div className="main-content d-flex justify-content-center mt-4">
                <div className="page-content px-3 w-50">
                    <div className="card p-3">
                        <form onSubmit={handleSubmit}>
                            <div className="d-grid gap-3">
                                <div className="card-header d-flex justify-content-between">
                                    <h2 className="card-title text-muted text-truncate" style={{ fontWeight: "bolder", fontSize: "20px" }}>Create Income</h2>
                                </div>
                                {/* Project */}
                                <div className="px-2">
                                    <label htmlFor="project_id" className="form-label">Project</label>
                                    <select
                                        name="project_id"
                                        value={formData.project_id}
                                        onChange={handleChange}
                                        className="form-select form-select-lg"
                                        id="project_id"
                                    >
                                        <option value="">Select Project</option>
                                        {projects.map((project) => (
                                            <option key={project._id} value={project._id}>
                                                {project.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Title */}
                                <div className="px-2">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="form-control form-control-lg"
                                    />
                                </div>

                                {/* Amount */}
                                <div className="px-2">
                                    <label htmlFor="amount" className="form-label">Amount</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        className="form-control form-control-lg"
                                    />
                                </div>

                                {/* Status and Currency */}
                                <div className="d-flex justify-content-evenly gap-4 px-3">
                                    <div className="d-flex flex-column w-100">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <select
                                            name="status"
                                            value={formData.status}
                                            onChange={handleChange}
                                            className="form-select form-select-lg"
                                            id="currency"
                                        >
                                            <option value="Pending">Pending</option>
                                            <option value="Recieved">Recieved</option>
                                        </select>
                                    </div>
                                    <div className="d-flex flex-column w-100">
                                        <label htmlFor="currency" className="form-label">Currency</label>
                                        <select
                                            name="currency"
                                            value={formData.currency}
                                            onChange={handleChange}
                                            className="form-select form-select-lg"
                                            id="currency"
                                        >
                                            <option value="">Select Currency</option>
                                            <option value="PKR">PKR</option>
                                            <option value="Dollar">Dollar</option>
                                            <option value="Dirham">Dirham</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Project Expense and Start Date */}
                                <div className="d-flex justify-content-evenly gap-4 px-3">
                                    <div className="d-flex flex-column w-100">
                                        <label htmlFor="project_expense" className="form-label">Project Expense</label>
                                        <input
                                            type="number"
                                            name="project_expense"
                                            value={formData.project_expense}
                                            onChange={handleChange}
                                            className="form-control form-control-lg"
                                        />
                                    </div>
                                    <div className="d-flex flex-column w-100">
                                        <label htmlFor="start_date" className="form-label">Start Date</label>
                                        <input
                                            type="date"
                                            name="start_date"
                                            value={formData.start_date}
                                            onChange={handleChange}
                                            className="form-control form-control-lg"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Received Amount and Received Amount Currency */}
                                <div className="d-flex justify-content-evenly gap-4 px-3">
                                    <div className="d-flex flex-column w-100">
                                        <label htmlFor="received_amount" className="form-label">Amount Received</label>
                                        <input
                                            type="number"
                                            name="recieved_amount"
                                            value={formData.recieved_amount}
                                            onChange={handleChange}
                                            className="form-control form-control-lg"
                                        />
                                    </div>
                                    <div className="d-flex flex-column w-100">
                                        <label htmlFor="received_amount_currency" className="form-label">Received Amount Currency</label>
                                        <select
                                            name="recieved_amount_currency"
                                            value={formData.recieved_amount_currency}
                                            onChange={handleChange}
                                            className="form-select form-select-lg"
                                            id="received_amount_currency"
                                        >
                                            <option value="">Select Currency</option>
                                            <option value="PKR">PKR</option>
                                            <option value="Dollar">Dollar</option>
                                            <option value="Dirham">Dirham</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Tax Amount and Tax Currency */}
                                <div className="d-flex justify-content-evenly gap-4 px-3">
                                    <div className="d-flex flex-column w-100">
                                        <label htmlFor="tax_amount" className="form-label">Tax Amount</label>
                                        <input
                                            type="number"
                                            name="tax_amount"
                                            value={formData.tax_amount}
                                            onChange={handleChange}
                                            className="form-control form-control-lg"
                                        />
                                    </div>
                                    <div className="d-flex flex-column w-100">
                                        <label htmlFor="tax_currency" className="form-label">Tax Currency</label>
                                        <select
                                            name="tax_currency"
                                            value={formData.tax_currency}
                                            onChange={handleChange}
                                            className="form-select form-select-lg"
                                            id="tax_currency"
                                        >
                                            <option value="">Select Currency</option>
                                            <option value="PKR">PKR</option>
                                            <option value="Dollar">Dollar</option>
                                            <option value="Dirham">Dirham</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Fee Amount and Fee Currency */}
                                <div className="d-flex justify-content-evenly gap-4 px-3">
                                    <div className="d-flex flex-column w-100">
                                        <label htmlFor="fee_amount" className="form-label">Fee Amount</label>
                                        <input
                                            type="number"
                                            name="fee_amount"
                                            value={formData.fee_amount}
                                            onChange={handleChange}
                                            className="form-control form-control-lg"
                                        />
                                    </div>
                                    <div className="d-flex flex-column w-100">
                                        <label htmlFor="fee_currency" className="form-label">Fee Currency</label>
                                        <select
                                            name="fee_currency"
                                            value={formData.fee_currency}
                                            onChange={handleChange}
                                            className="form-select form-select-lg"
                                            id="fee_currency"
                                        >
                                            <option value="">Select Currency</option>
                                            <option value="PKR">PKR</option>
                                            <option value="Dollar">Dollar</option>
                                            <option value="Dirham">Dirham</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="mt-3 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary w-25">Create Income</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateIncome;



















