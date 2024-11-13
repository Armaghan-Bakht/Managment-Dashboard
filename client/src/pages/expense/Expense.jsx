import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import VITE_APP_API_URL from '../../../config/config';


const Expense = () => {
    const [expenses, setExpenses] = useState([]);

    // Fetch expenses on component mount
    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/api/expense`);
                setExpenses(response.data);
            } catch (error) {
                console.error("Error fetching expenses:", error);
            }
        };
        fetchExpenses();
    }, []);

    return (
        <div className="main-content">
            <div className="page-content">
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between px-3">
                            <h4 className="fs-16 fw-semibold mb-1">Expense</h4>
                            <Link to="/expense/createExpense" className="btn btn-primary d-flex align-items-center" style={{ fontWeight: "500" }}>
                                Add Expense
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <table className="table table-hover table-bordered table-striped dt-responsive nowrap" style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Amount</th>
                                <th>Currency</th>
                                <th>Category</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense,index) => (
                                <tr key={expense._id}>
                                    <td>{index + 1}</td>
                                    <td>{expense.title}</td>
                                    <td className="text-center">{expense.amount}</td>
                                    <td className="text-center">{expense.currency}</td>
                                    <td className="text-center">{expense.category_id}</td> {/* Map to category name if needed */}
                                    <td className="text-center">{expense.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Expense;








