import '../assets/js/pages/layout'
import '../assets/css/bootstrap.min.css'
import '../assets/css/icons.min.css'
import '../assets/libs/simplebar/simplebar.min.css'
import '../assets/css/app.min.css'

// JavaScript 
import "../assets/libs/jquery/jquery.min.js"
import "../assets/libs/bootstrap/js/bootstrap.bundle.min.js"
import "../assets/libs/metismenu/metisMenu.min.js"
import "../assets/libs/simplebar/simplebar.min.js"
// import "../assets/libs/node-waves/waves.min.js"

// apexcharts
import "../assets/libs/apexcharts/apexcharts.min.js"
import "../assets/js/pages/dashboard.init.js"

// App js 
// import "../assets/js/app.js"

import { Link } from 'react-router-dom'




const Sidebar = () => {
    return (
        <div>
            {/* <!-- ========== Left Sidebar Start ========== --> */}
            <div className="sidebar-left">

                <div data-simplebar className="h-100">

                    {/* <!--- Sidebar-menu --> */}
                    <div id="sidebar-menu">
                        {/* <!-- Left Menu Start --> */}
                        <ul className="left-menu list-unstyled" id="side-menu">
                            <li className="menu-title">Navigation</li>
                            <li>
                                <Link to="/" className="">
                                    <i className="fas fa-desktop"></i>
                                    <span>Dashboard</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/employe" className=" ">
                                    <i className="fa fa-palette"></i>
                                    <span>Employe</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/customer" className=" ">
                                    <i className="fa fa-adjust"></i>
                                    <span>Customers</span>
                                </Link>

                            </li>

                            <li>
                                <Link to="/projects" className="">
                                    <i className="fa fa-icons"></i>
                                    <span>Projects</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/attendance" className=" ">
                                    <i className="fa fa-window-restore"></i>
                                    <span>Attendence</span>
                                </Link>

                            </li>

                            <li>
                                <Link to="leaverequest" className="">
                                    <i className="fa fa-shapes"></i>
                                    <span>Leave Request</span>
                                </Link>

                            </li>

                            <li className="menu-title">Finance</li>

                            <li>
                                <Link to="/income" className=""><i className="fa fa-chart-pie align-middle"></i> <span>Income</span></Link>

                            </li>

                            <li>
                                <Link to="/expense" className=" ">
                                    <i className="fas fa-table"></i>
                                    <span>Expense</span>
                                </Link>

                            </li>
                            <li>
                                <Link to="/expense/expenseCategory" className=" ">
                                    <i className="fas fa-table"></i>
                                    <span>Expense Catagory</span>
                                </Link>

                            </li>

                            <li className="menu-title">Configration</li>

                            <li><Link to="/department"><i className="fa fa-dice"></i> <span>Deparment</span></Link></li>

                            <li>
                                <Link to="/designation" className=""><i className="fa fa-fill-drip"></i> <span>Designation</span></Link>

                            </li>

                            <li>
                                <Link to="/jobType" className=""><i className="fa fa-pencil-ruler"></i> <span>Job Type</span></Link>

                            </li>

                            <li><Link to="/jobLocation"><i className="fa fa-th-list"></i> <span>Job Location</span></Link></li>
                            {/* <li><Link to="/leaveType"><i className="fa fa-ruler-combined"></i> <span>Leave Type</span></Link></li> */}


                            <li className="menu-title">Report</li>

                            <li>
                                <Link to="/attendenceReport" className=" ">
                                    <i className="fa fa-unlock-alt"></i>
                                    <span>Attendence report</span>
                                </Link>

                            </li>

                            <li>
                                <Link to="/employeReport" className="">
                                    <i className="fa fa-unlink"></i>
                                    <span>Employe report</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/financeReport"><i className="fas fa-pager"></i> <span>Finance Report</span></Link>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Sidebar --> */}
                </div>
            </div>
            {/* <!-- Left Sidebar End --> */}
        </div>
    )
}

export default Sidebar