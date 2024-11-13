


import { useState, useEffect } from 'react';
import axios from 'axios';
import VITE_APP_API_URL from '../../../config/config';

const CreateExpense = () => {
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        amount: '',
        paidAmount: '',
        balance: '',
        categoryId: '',
        currency: '',
        taxAmount: '',
        taxCurrency: '',  // Added missing field
        feeAmount: '',
        feeCurrency: '',  // Added missing field
        paymentMethod: '',
        status: '',  // Added missing field
    });

    // Fetch categories on component mount
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/api/expensecategory`);
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${VITE_APP_API_URL}/api/expense`, formData);
            alert("Expense Created Successfully");
            console.log("Created Expense:", response.data);
        } catch (error) {
            console.error("Error creating expense:", error.response?.data);
            alert("Failed to create expense");
        }
    };

    return (
        <div className="main-content d-flex justify-content-center mt-4">
            <div className="page-content px-3 w-50 ">
                <div className="card p-3">
                    <form onSubmit={handleSubmit}>
                        <div className="d-grid gap-3">
                            <div className="card-header d-flex justify-content-between">
                                <h2 className="card-title text-muted text-truncate" style={{ fontWeight: "bolder", fontSize: "20px" }}>Create Expense</h2>
                            </div>
                            <div className="px-2">
                                <label className="form-label">Title</label>
                                <input type="text" className="form-control form-control-lg" name="title" value={formData.title} onChange={handleChange} required />
                            </div>
                            <div className="px-2">
                                <label className="form-label">Amount</label>
                                <input type="number" className="form-control form-control-lg" name="amount" value={formData.amount} onChange={handleChange} required />
                            </div>
                            <div className="px-2">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control form-control-lg"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="4"
                                />
                            </div>
                            <div className="d-flex justify-content-evenly gap-4 px-3">
                                <div className="d-flex flex-column w-100">
                                    <label className="form-label">Status</label>
                                    <select className="form-select form-select-lg" name="status" value={formData.status} onChange={handleChange} required>
                                        <option value="">Select Status</option>
                                        <option value="Paid">Paid</option>
                                        <option value="UnPaid">UnPaid</option>
                                    </select>
                                </div>
                                <div className="d-flex flex-column w-100">
                                    <label className="form-label">Currency</label>
                                    <select className="form-select form-select-lg" name="currency" value={formData.currency} onChange={handleChange} required>
                                        <option value="">Select Currency</option>
                                        <option value="PKR">PKR</option>
                                        <option value="Dollar">Dollar</option>
                                        <option value="Dirham">Dirham</option>
                                    </select>
                                </div>
                            </div>
                            <div className="px-2">
                                <label className="form-label">Paid Amount</label>
                                <input type="number" className="form-control form-control-lg" name="paidAmount" value={formData.paidAmount} onChange={handleChange} />
                            </div>
                            <div className="px-2">
                                <label className="form-label">Balance</label>
                                <input type="number" className="form-control form-control-lg" name="balance" value={formData.balance} onChange={handleChange} />
                            </div>
                            <div className="d-flex justify-content-evenly gap-4 px-3">
                                <div className="d-flex flex-column w-100">
                                    <label className="form-label">Tax Amount</label>
                                    <input type="number" className="form-control form-control-lg" name="taxAmount" value={formData.taxAmount} onChange={handleChange} />
                                </div>
                                <div className="d-flex flex-column w-100">
                                    <label className="form-label">Tax Currency</label>
                                    <select className="form-select form-select-lg" name="taxCurrency" value={formData.taxCurrency} onChange={handleChange}>
                                        <option value="">Select Currency</option>
                                        <option value="PKR">PKR</option>
                                        <option value="Dollar">Dollar</option>
                                        <option value="Dirham">Dirham</option>
                                    </select>
                                </div>
                            </div>
                            <div className="d-flex justify-content-evenly gap-4 px-3">
                                <div className="d-flex flex-column w-100">
                                    <label className="form-label">Fee Amount</label>
                                    <input type="number" className="form-control form-control-lg" name="feeAmount" value={formData.feeAmount} onChange={handleChange} />
                                </div>
                                <div className="d-flex flex-column w-100">
                                    <label className="form-label">Fee Currency</label>
                                    <select className="form-select form-select-lg" name="feeCurrency" value={formData.feeCurrency} onChange={handleChange}>
                                        <option value="">Select Currency</option>
                                        <option value="PKR">PKR</option>
                                        <option value="Dollar">Dollar</option>
                                        <option value="Dirham">Dirham</option>
                                    </select>
                                </div>
                            </div>
                            <div className="px-2">
                                <label className="form-label">Payment Method</label>
                                <select className="form-select form-select-lg" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
                                    <option value="">Select Method</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Bank Transfer">Bank Transfer</option>
                                    <option value="Easypaisa">Easypaisa</option>
                                    <option value="JazzCash">JazzCash</option>
                                </select>
                            </div>
                            <div className="px-2">
                                <label className="form-label">Category</label>
                                <select className="form-select form-select-lg" name="categoryId" value={formData.categoryId} onChange={handleChange} required>
                                    <option value="">Select Category</option>
                                    {categories.map(category => (
                                        <option key={category._id} value={category._id}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                            <button type="submit" className="btn bg-primary text-white d-flex align-items-center justify-content-center mt-4 px-3" style={{ height: "40px", fontWeight: "bold", fontSize: "16px" }}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateExpense;


