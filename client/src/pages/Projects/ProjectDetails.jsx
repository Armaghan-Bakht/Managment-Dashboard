// ../assets/images/users/avatar-1.png
import avatar1 from '../../assets/images/users/avatar-1.png'
import avatar2 from '../../assets/images/users/avatar-2.png'
import avatar3 from '../../assets/images/users/avatar-3.png'

import { Link } from 'react-router-dom'



const ProjectDetails = () => {
    return (
        <>
            {/* <!-- Start right Content here --> */}

            <div className="main-content ">
                {/* <!--& project detail  --> */}
                <div className="page-content " >
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                <div>
                                    <h4 className="fs-16 fw-semibold mb-1 mb-md-1">Project Details</h4>
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="../projects/projects.html">projects</a></li>
                                        <li className="breadcrumb-item active">project-details</li>
                                    </ol>
                                </div>
                                <div className="page-title-right">
                                    <Link to="/projects/taskBoard" className="btn btn-primary d-flex gap-2 align-items-center " style={{ fontWeight: "500 " }} >Task Board</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex gap-3">
                        <div style={{ width: "70%" }}>
                            {/* <!-- & card 1 --> */}
                            <div className="  d-flex justify-content-between mb-4 gap-4 ">
                                <div className="card shadow-lg py-3 w-50 d-flex justify-content-between align-items-center  flex-row"  >
                                    <div style={{
                                        paddingLeft: '15px',
                                        marginLeft: '15px',
                                        fontSize: '25px',
                                        backgroundColor: 'rgb(219, 15, 49)',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        paddingRight: '13px',
                                        paddingTop: '15px',
                                        paddingBottom: '15px',
                                        borderRadius: '50%',
                                        color: 'white',
                                    }}>
                                        <i className="fas fa-check-double"></i>
                                    </div>

                                    <div className="" style={{ paddingRight: "20px" }}>
                                        <h2 className="text-muted text-truncate mb-2 card-title ">Total Tasks</h2>
                                        <h3 className="mb-0 text-end">15</h3>
                                    </div>
                                </div>
                                <div className="card shadow-lg py-3 w-50 d-flex justify-content-between align-items-center  flex-row"  >
                                    <div className="bg-primary" style={{
                                        paddingLeft: '15px',
                                        marginLeft: '15px',
                                        fontSize: '25px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        padding: '15px',
                                        borderRadius: '50%',
                                        color: 'white',
                                    }}>
                                        <i className=" fas fa-envelope  "></i>
                                    </div>

                                    <div className="" style={{ paddingRight: "20px" }}>
                                        <h2 className="text-muted text-truncate mb-2 card-title ">Comments</h2>
                                        <h3 className="mb-0 text-end">9</h3>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- & card 2 --> */}
                            <div className="  d-flex justify-content-between mb-4 gap-4 ">
                                <div className="card shadow-lg p-3 w-50   "  >
                                    <div className="card-header d-flex justify-content-between w-100">
                                        <h2 className="card-title text-muted text-truncate">Team Memebers <span>(1)</span></h2>
                                        <div className="bg-primary" style={{
                                            paddingLeft: '15px',
                                            fontSize: '15px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            padding: '8px',
                                            borderRadius: '50%',
                                            color: 'white',
                                        }}>
                                            <i className="fas fa-share-alt"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center  mt-4 ">
                                            <div className="d-flex gap-3 align-items-center">
                                                <div className="bg-primary" style={{
                                                    color: 'white',
                                                    height: 'fit-content',
                                                    padding: '10px 17px',
                                                    borderRadius: '50%',
                                                    fontSize: 'larger',
                                                }}>A</div>
                                                <div>
                                                    <div style={{ fontSize: "larger", fontWeight: "bold" }}>Allen Mark</div>
                                                    <div className="text-muted text-truncate" style={{ fontSize: "smaller", letterSpacing: ".5px" }}>allen@gmail.com</div>
                                                </div>
                                            </div>
                                            <i className=" fas fa-trash-alt" style={{
                                                backgroundColor: 'rgb(230, 38, 70)',
                                                padding: '10px',
                                                borderRadius: '5px',
                                                color: '#ffffff',
                                                fontSize: 'smaller',
                                            }}></i>
                                        </div>
                                    </div>

                                </div>
                                <div className="card shadow-lg p-3 w-50   "  >
                                    <div className="card-header d-flex justify-content-between w-100">
                                        <h2 className="card-title text-muted text-truncate">Clients <span>(1)</span></h2>
                                        <div className="bg-primary" style={{
                                            paddingLeft: '15px',
                                            fontSize: '15px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            padding: '8px',
                                            borderRadius: '50%',
                                            color: 'white',
                                        }}>
                                            <i className="fas fa-share-alt"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-between align-items-center  mt-4 ">
                                            <div className="d-flex gap-3 align-items-center">
                                                <div className="bg-info" style={{
                                                    color: 'white',
                                                    height: 'fit-content',
                                                    padding: '10px 17px',
                                                    borderRadius: '50%',
                                                    fontSize: 'larger',
                                                }}>C</div>
                                                <div>
                                                    <div style={{ fontSize: "larger", fontWeight: "bold" }}>Client</div>
                                                    <div className="text-muted text-truncate" style={{ fontSize: "smaller", letterSpacing: ".5px" }}>client@gmail.com</div>
                                                </div>
                                            </div>
                                            <i className=" fas fa-trash-alt" style={{
                                                backgroundColor: 'rgb(230, 38, 70)',
                                                padding: '10px',
                                                borderRadius: '5px',
                                                color: '#ffffff',
                                                fontSize: 'smaller',
                                            }}></i>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>

                        {/* <!-- & Activity --> */}
                        <div style={{ width: "30%" }}>
                            <div className="">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Progress <span style={{ fontsize: "small" }}>(Last Week)</span></h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between">
                                                <h2 className="rich-list-title mb-0">Sales growth</h2>
                                                <p className="rich-list-subtitle mb-0">62%</p>
                                            </div>
                                            <div className="progress progress-sm" style={{ height: "8px" }}>
                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{ width: "62%" }}></div>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between">
                                                <h2 className="rich-list-title mb-0">Product growth</h2>
                                                <p className="rich-list-subtitle mb-0">34%</p>
                                            </div>
                                            <div className="progress progress-sm" style={{ height: "8px" }}>
                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: "34%" }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex justify-content-between">
                                                <h2 className="rich-list-title mb-0">Market share</h2>
                                                <p className="rich-list-subtitle mb-0">40%</p>
                                            </div>
                                            <div className="progress progress-sm" style={{ height: "8px" }}>
                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{ width: "40%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card" style={{
                                overflowY: 'auto',
                                height: '304px',
                            }} data-simplebar="init"><div className="simplebar-wrapper" style={{ margin: "0px" }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask"><div className="simplebar-offset" style={{right: "-17px" , bottom: "0px"}}><div className="simplebar-content-wrapper"   style={{
                                height: '100%',
                                overflow: 'hidden scroll',
                              }}><div className="simplebar-content" style={{padding: "0px"}}>
                                <div className="card-header card-header-bordered">
                                    <div className="card-icon text-muted"><i className="fa fa-clipboard-list fs-14"></i></div>
                                    <h3 className="card-title">Recent activities</h3>
                                    <div className="card-addon">
                                        <button className="btn btn-sm btn-label-primary">See all</button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="timeline timeline-timed">
                                        <div className="timeline-item">
                                            <span className="timeline-time">10:00</span>
                                            <div className="timeline-pin"><i className="marker marker-circle text-primary"></i></div>
                                            <div className="timeline-content">
                                                <div>
                                                    <span>Meeting with</span>
                                                    <div className="avatar-group ms-2">
                                                        <div className="avatar avatar-circle">
                                                            <img src={avatar1} alt="Avatar image" className="avatar-2xs" />
                                                        </div>
                                                        <div className="avatar avatar-circle">
                                                            <img src={avatar2} alt="Avatar image" className="avatar-2xs" />
                                                        </div>
                                                        <div className="avatar avatar-circle">
                                                            <img src={avatar3} alt="Avatar image" className="avatar-2xs" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-time">14:00</span>
                                            <div className="timeline-pin"><i className="marker marker-circle text-danger"></i></div>
                                            <div className="timeline-content">
                                                <p className="mb-0">Received a new feedback on <a href="#">GoFinance</a> App product.</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-time">15:20</span>
                                            <div className="timeline-pin"><i className="marker marker-circle text-success"></i></div>
                                            <div className="timeline-content">
                                                <p className="mb-0">Lorem ipsum dolor sit amit,consectetur eiusmdd tempor incididunt ut labore et dolore magna.</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-time">17:00</span>
                                            <div className="timeline-pin"><i className="marker marker-circle text-info"></i></div>
                                            <div className="timeline-content">
                                                <p className="mb-0">Make Deposit <a href="#">USD 700</a> o ESL.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                            </div>

                                    <div className="simplebar-placeholder" style={{ width: 'auto', height: '351px' }}></div>
                                </div><div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" style={{ transform: 'translate3d(0px, 0px, 0px)', display: 'none' }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: 'visible' }}><div className="simplebar-scrollbar" style={{ height: '263px', transform: 'translate3d(0px, 0px, 0px)', display: 'block' }}></div></div></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Page-content --> */}

        </>
    )
}

export default ProjectDetails