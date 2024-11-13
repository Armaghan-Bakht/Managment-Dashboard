import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import VITE_APP_API_URL from "../../../config/config";

const Income = () => {
    const [incomes, setIncomes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIncomes = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/api/income`);
                setIncomes(response.data);
            } catch (error) {
                console.error("Error fetching incomes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchIncomes();
    }, []);

    return (
        <>
            <div className="main-content">
                <div className="page-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between px-3">
                                <div>
                                    <h4 className="fs-16 fw-semibold mb-1 mb-md-1">Income</h4>
                                </div>
                                <div className="page-title-right d-flex gap-2">
                                    <Link to="/create/income" className="btn btn-primary d-flex gap-2 align-items-center" style={{ fontWeight: "500" }}>Add Income</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table id="datatable" className="table table-hover table-bordered table-striped dt-responsive nowrap" style={{ borderCollapse: "collapse", borderSpacing: "0", width: "100%" }}>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Currency</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="5" className="text-center">Loading...</td>
                                    </tr>
                                ) : incomes.length > 0 ? (
                                    incomes.map((income, index) => (
                                        <tr key={income._id}>
                                            <td>{index + 1}</td> {/* Sequential ID starting from 1 */}
                                            <td>{income.title}</td>
                                            <td className="text-center">{income.amount}</td>
                                            <td className="text-center">{income.currency}</td>
                                            <td className="text-center">{income.status}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center">No incomes found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Income;
