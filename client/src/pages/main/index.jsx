import { useState, useEffect } from 'react'
import '../../assets/js/pages/layout.js'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/icons.min.css'
import '../../assets/libs/simplebar/simplebar.min.css'
import '../../assets/css/app.min.css'
import "../../assets/libs/jquery/jquery.min.js"
import "../../assets/libs/bootstrap/js/bootstrap.bundle.min.js"
import "../../assets/libs/simplebar/simplebar.min.js"
import "../../assets/libs/apexcharts/apexcharts.min.js"
import "../../assets/js/pages/dashboard.init.js"
import dashboardShape from '../../assets/images/dashboard/dashboard-shape-1.png';
import dashboardShape2 from '../../assets/images/dashboard/dashboard-shape-2.png';
import dashboardShape3 from '../../assets/images/dashboard/dashboard-shape-3.png';

import axios from 'axios'

import VITE_APP_API_URL from '../../../config/config.js'


import Chart from 'react-apexcharts';
const Index = () => {


    const [dateString, setDateString] = useState('');
    const [timeString, setTimeString] = useState('');
    const [isCheckInEnabled, setIsCheckInEnabled] = useState(false);
    const [isCheckOutEnabled, setIsCheckOutEnabled] = useState(false);
    const [checkInTimeRemaining, setCheckInTimeRemaining] = useState(0);
    const [checkOutTimeRemaining, setCheckOutTimeRemaining] = useState(0);

    const [customerCount, setCustomerCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const [projects, setProjects] = useState([]);
    const [userCount, setUserCount] = useState(0);



    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/auth/api/users`);
                setUserCount(response.data.users.length); // Set user count from API response
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserCount();
    }, []);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/api/project`);
                setProjects(response.data); // Store all projects in state
            } catch (error) {
                console.error("Error fetching project data:", error);
            }
        };

        fetchProjects();
    }, []);


    useEffect(() => {
        const fetchProjectCount = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/api/project`);
                setProjectCount(response.data.length);
            } catch (error) {
                console.error("Error fetching project data:", error);
            }
        };

        fetchProjectCount();
    }, []);



    useEffect(() => {
        const fetchCustomerCount = async () => {
            try {
                const response = await axios.get(`${VITE_APP_API_URL}/api/customer`);
                setCustomerCount(response.data.length);
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };

        fetchCustomerCount();
    }, []);


    const options = {
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        colors: ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#0dcaf0'],
        legend: {
            position: 'bottom',
            labels: {
                colors: '#373d3f',
            },
        },
    };

    const series = [44, 55, 13, 43, 22];
    const currentDate = new Date();
    const dateStringNow = currentDate.toLocaleDateString();
    const timeStringNow = currentDate.toLocaleTimeString();

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentDate = new Date();
            const hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();

            setDateString(currentDate.toLocaleDateString());
            setTimeString(currentDate.toLocaleTimeString());

            const checkInTargetTime = new Date();
            checkInTargetTime.setHours(9);
            checkInTargetTime.setMinutes(0);
            checkInTargetTime.setSeconds(0);

            if (hours < 9) {
                setCheckInTimeRemaining(Math.floor((checkInTargetTime.getTime() - currentDate.getTime()) / 1000));
            } else if (hours === 9 && minutes < 30) {
                setIsCheckInEnabled(true);
                setCheckInTimeRemaining(30 - minutes * 60);
            } else {
                setIsCheckInEnabled(false);
                const nextCheckInTargetTime = new Date(currentDate.getTime() + 86400000); // next day
                nextCheckInTargetTime.setHours(9);
                nextCheckInTargetTime.setMinutes(0);
                nextCheckInTargetTime.setSeconds(0);
                setCheckInTimeRemaining(Math.floor((nextCheckInTargetTime.getTime() - currentDate.getTime()) / 1000));
            }
            // Calculate time remaining until check-out (5:00 PM)
            const checkOutTargetTime = new Date();
            checkOutTargetTime.setHours(17);
            checkOutTargetTime.setMinutes(0);
            checkOutTargetTime.setSeconds(0);

            if (hours < 17) {
                setCheckOutTimeRemaining(Math.floor((checkOutTargetTime.getTime() - currentDate.getTime()) / 1000));
            } else if (hours >= 17 && hours < 22) {
                setIsCheckOutEnabled(true);
                setCheckOutTimeRemaining(0);
            } else {
                setIsCheckOutEnabled(false);
                const nextCheckOutTargetTime = new Date(currentDate.getTime() + 86400000); // next day
                nextCheckOutTargetTime.setHours(17);
                nextCheckOutTargetTime.setMinutes(0);
                nextCheckOutTargetTime.setSeconds(0);
                setCheckOutTimeRemaining(Math.floor((nextCheckOutTargetTime.getTime() - currentDate.getTime()) / 1000));
            }
        }, 1000); // Update every second

        return () => clearInterval(intervalId);
    }, [isCheckInEnabled, isCheckOutEnabled]);

    return (
        <div>
            {/* <!-- Start right Content here --> */}

            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <div>
                                        <h4 className="fs-16 fw-semibold mb-1 mb-md-2">Good Morning, <span className="text-primary">Jonas!</span></h4>
                                        <p className="text-muted mb-0">Here&apos;s what&apos;s happening with your store today.</p>
                                    </div>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Clivax</a></li>
                                            <li className="breadcrumb-item active">Dashboard</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--    end row -->
                <!-- & Main Card  --> */}
                        <div className="">
                            <div className="  d-flex justify-content-between mb-4 gap-4 ">

                                <div className="card shadow-lg p-3 w-50 " >
                                    <div className="" style={{ paddingLeft: "20px" }}>
                                        <h2 className="text-muted text-truncate mb-2 card-title ">Active Users</h2>
                                        <h3 className="mb-0">{userCount}</h3>
                                    </div>
                                    <div className="mt-3 mb-2" style={{ paddingLeft: "20px" }}>
                                        <p className="mb-0"><span className="text-primary me-2 fs-14"><i className="fas fa-caret-up me-1"></i>3.4%</span>vs last month</p>
                                    </div>
                                </div>

                                <div className="card shadow-lg p-3 w-50">
                                    <div className="card-header d-flex mb-4 w-100 justify-content-between " style={{ paddingLeft: "40px", paddingRight: "40px" }}>
                                        <h5 className="text-muted text-truncate">Date: {dateStringNow}</h5>
                                        <h5 className="text-muted text-truncate">Time: {timeStringNow}</h5>
                                    </div>
                                    <div>
                                        <div className="d-flex w-100 justify-content-between" style={{ paddingLeft: "40px", paddingRight: "40px" }}>
                                            <button
                                                type="button"
                                                className={`btn ${isCheckInEnabled ? 'bg-primary text-white' : 'bg-secondary text-muted'} `}
                                                style={{ height: "60px", width: "140px", fontWeight: "bold", fontSize: "18px" }}
                                                disabled={!isCheckInEnabled}
                                            >
                                                Check In
                                            </button>
                                            <button
                                                type="button"
                                                className={`btn ${isCheckOutEnabled ? 'bg-primary text-white' : 'bg-secondary text-muted'} `}
                                                style={{ height: "60px", width: "140px", fontWeight: "bold", fontSize: "18px" }}
                                                disabled={!isCheckOutEnabled}
                                            >
                                                Check Out
                                            </button>
                                        </div>

                                        <div className="d-flex w-100 justify-content-between" style={{ paddingLeft: "40px", paddingRight: "40px", fontSize: "24px" }}>
                                            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Time remaining {formatTime(checkInTimeRemaining)}</div>
                                            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Time remaining {formatTime(checkOutTimeRemaining)}</div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            {/* <!-- & card 2 --> */}

                            <div className="row px-2 d-flex justify-content-between px-3 " >
                            <div className="card" style={{ width: "48%" }}>
            <div className="card-header d-flex justify-content-center">
                <h2 className="card-title text-muted text-truncate">Project</h2>
            </div>
            <div className="card-body">
                {projects.map((project) => (
                    <div className="d-flex justify-content-between px-3" key={project._id}>
                        <h3>{project.name}</h3>
                        <p className="bg-primary text-white rounded px-2 py-1" style={{ width: "fit-content" }}>
                            <i className="fas fa-arrow-right"></i>
                        </p>
                    </div>
                ))}
            </div>
        </div>
                                {/* <!-- & Priority Task --> */}
                                <div className="card " style={{ width: "48%" }}>
                                    <div className="card-header d-flex justify-content-center">
                                        <h2 className="card-title text-muted text-truncate" >Priority Task</h2>
                                    </div>
                                    <div className="row dt-row"><div className="col-sm-12"><table id="datatable" className="table table-hover table-bordered table-striped dt-responsive nowrap dataTable no-footer dtr-inline" style={{ borderCcollapse: "collapse", borderSpacing: "0px", width: "100%" }} aria-describedby="datatable_info">
                                        <thead>
                                            <tr /><th className="sorting" tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" style={{ width: "193.4px" }} aria-label="Name: activate to sort column ascending">Task Name</th><th className="sorting" tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" style={{ width: "284.4px" }} aria-label="Position: activate to sort column ascending">Priority Name</th><th className="sorting sorting_desc" tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" style={{ width: "139.4px" }} aria-label="Office: activate to sort column ascending" aria-sort="descending">Deadline</th></thead>
                                        <tbody>
                                            <tr className="">
                                                <td className="dtr-control" tabIndex="0">Airi Satou</td>
                                                <td>Accountant</td>
                                                <td className="sorting_1">  5/5/2024</td>


                                            </tr><tr className="even">
                                                <td className="dtr-control" tabIndex="0">Garrett Winters</td>
                                                <td>Accountant</td>
                                                <td className="sorting_1">  5/5/2024</td>


                                            </tr><tr className="odd">
                                                <td className="dtr-control" tabIndex="0">Rhona Davidson</td>
                                                <td>Integration Specialist</td>
                                                <td className="sorting_1">  5/5/2024</td>


                                            </tr><tr className="even">
                                                <td className="dtr-control" tabIndex="0">Sakura Yamamoto</td>
                                                <td>Support Engineer</td>
                                                <td className="sorting_1">  5/5/2024</td>

                                            </tr><tr className="odd">
                                                <td className="dtr-control" tabIndex="0">Shou Itou</td>
                                                <td>Regional Marketing</td>
                                                <td className="sorting_1">  5/5/2024</td>
                                            </tr></tbody>
                                    </table></div></div>
                                </div>
                            </div>
                            {/* <!-- & 3 cards --> */}
                            <div className="row mt-4 mb-4 px-3">
                                <div className="col-xl-4">
                                    <div className="card bg-danger-subtle" style={{ background: `url(${dashboardShape})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom center" }}>
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <div className="avatar avatar-sm avatar-label-danger">
                                                    <i className="mdi mdi-buffer mt-1"></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h2 className="text-danger mb-1">Customers</h2>
                                                    <h4 className="mb-0">{customerCount}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="card bg-success-subtle" style={{ background: `url(${dashboardShape2})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom center" }}>
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <div className="avatar avatar-sm avatar-label-success">
                                                    <i className="mdi mdi-cash-usd-outline mt-1"></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h2 className="text-success mb-1">projects</h2>
                                                    <h4 className="mb-0">{projectCount}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="card bg-info-subtle" style={{ background: `url(${dashboardShape3})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom center" }}>
                                        <div className="card-body">
                                            <div className="d-flex">
                                                <div className="avatar avatar-sm avatar-label-info">
                                                    <i className="mdi mdi-webhook mt-1"></i>
                                                </div>
                                                <div className="ms-3">
                                                    <h2 className="text-info mb-1">Total Tasks</h2>
                                                    <h4 className="mb-0">72</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            {/* <!-- end row -->
                    <!-- & card 4 --> */}
                            <div className="d-flex justify-content-between align-items-center px-3">
                                <div className="card shadow-lg p-3 " style={{ width: "40%" }} >
                                    <div className="" style={{ paddingLeft: "20px" }}>
                                        <h2 className="text-muted text-truncate mb-2 card-title ">Revenue</h2>
                                        <h3 className="mb-0">$85400</h3>
                                    </div>
                                    <div className="mt-3 mb-2" style={{ paddingLeft: "20px" }}>
                                        <p className="mb-0"><span className="text-danger me-2 fs-14"><i className="fas fa-caret-down me-1"></i>3.4%</span>vs last month</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '53%' }}>
                                    <div style={{ minHeight: '267.7px' }}>
                                        <Chart options={options} series={series} type="pie" height={267.7} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <!-- end container-fluid --> */}
                    </div>
                    {/* <!-- End Page-content --> */}



                </div>
                {/* <!-- end main content--> */}
            </div>
            {/* <!-- end layout-wrapper --> */}


        </div>
    )
}
// Helper function to format time
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(secs)}`;
}

// Helper function to pad zero
function padZero(value) {
    return (value < 10 ? '0' : '') + value;
}

export default Index