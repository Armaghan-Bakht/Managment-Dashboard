import '../assets/js/pages/layout'
import '../assets/css/bootstrap.min.css'
import '../assets/css/icons.min.css'
import '../assets/libs/simplebar/simplebar.min.css'
import '../assets/css/app.min.css'
import avatar from '../assets/images/users/avatar-6.png'

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


const Navbar = () => {
    return (
        <div>

            {/* <!-- Start topbar --> */}
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="navbar-logo-box">
                        <h3>TeamsCare</h3>


                    </div>
                    {/* <!-- End navbar brand --> */}

                    {/* <!-- Start menu --> */}
                    <div className="d-flex justify-content-end menu-sm px-3 ms-auto">

                        <div className="d-flex align-items-center gap-3 nm,">
                            <span className="rich-list-subtitle ">admin@codubucks.in</span>
                            <div className="dropdown d-inline-block">

                                <button type="button" className="btn btn-sm top-icon p-0" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="rounded avatar-2xs p-0" src={avatar} alt="Header Avatar" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-wide dropdown-menu-end dropdown-menu-animated overflow-hidden py-0">
                                    <div className="card border-0">
                                        <div className="card-header bg-primary rounded-0">
                                            <div className="rich-list-item w-100 p-0">
                                                <div className="rich-list-prepend">
                                                    <div className="avatar avatar-label-light avatar-circle">
                                                        <div className="avatar-display"><i className="fa fa-user-alt"></i></div>
                                                    </div>
                                                </div>
                                                <div className="rich-list-content">
                                                    <h3 className="rich-list-title text-white">Charlie Stone</h3>

                                                </div>
                                                <div className="rich-list-append"><span className="badge badge-label-light fs-6">6+</span></div>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="grid-nav grid-nav-flush grid-nav-action grid-nav-no-rounded">
                                                <div className="grid-nav-row">
                                                    <a href="apps-contact.html" className="grid-nav-item">
                                                        <div className="grid-nav-icon"><i className="far fa-address-card"></i></div>
                                                        <span className="grid-nav-content">Profile</span>
                                                    </a>
                                                    <a href="#!" className="grid-nav-item">
                                                        <div className="grid-nav-icon"><i className="far fa-calendar-check"></i></div>
                                                        <span className="grid-nav-content">Tasks</span>
                                                    </a>
                                                </div>
                                                <div className="grid-nav-row">

                                                    <a href="#!" className="grid-nav-item">
                                                        <div className="grid-nav-icon"><i className="far fa-sticky-note"></i></div>
                                                        <span className="grid-nav-content">Notes</span>
                                                    </a>
                                                    <a href="#!" className="grid-nav-item">
                                                        <div className="grid-nav-icon"><i className="far fa-bell"></i></div>
                                                        <span className="grid-nav-content">Notification</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer card-footer-bordered rounded-0"><a href="auth-login.html" className="btn btn-label-danger">Sign out</a></div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Profile --> */}
                        </div>
                    </div>
                    {/* <!-- End menu --> */}
                </div>
            </header>
            {/* <!-- End topbar --> */}

        </div>
    )
}

export default Navbar