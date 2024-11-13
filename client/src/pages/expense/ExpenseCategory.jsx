import { useState } from "react";
import axios from "axios";
import VITE_APP_API_URL from "../../../config/config";

const ExpenseCategory = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        type: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${VITE_APP_API_URL}/api/expensecategory`, formData);
            alert("Expense Category Created Successfully");
            console.log("Saved Expense Category:", response.data);
        } catch (error) {
            console.error("Error creating expense category:", error.response?.data);
            alert("Failed to create expense category");
        }
    };

    return (
        <div className="main-content d-flex justify-content-center mt-4">
            <div className="page-content px-3 w-50 ">
                <div className="card p-3">
                    <form onSubmit={handleSubmit}>
                        <div className="d-grid gap-3">
                            <div className="card-header d-flex justify-content-between">
                                <h2 className="card-title text-muted text-truncate" style={{ fontWeight: "bolder", fontSize: "20px" }}>
                                    Expense Category
                                </h2>
                            </div>
                            <div className="px-2">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="px-2">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="d-flex justify-content-evenly gap-4 px-3">
                                <div className="d-flex flex-column w-100">
                                    <label htmlFor="type" className="form-label">Type</label>
                                    <select
                                        className="form-select form-select-lg"
                                        id="type"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Type</option>
                                        <option value="One time">One time</option>
                                        <option value="Monthly">Monthly</option>
                                    </select>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn bg-primary text-white d-flex align-items-center justify-content-center mt-4 px-3"
                                style={{ height: "40px", fontWeight: "bold", fontSize: "16px" }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ExpenseCategory;






