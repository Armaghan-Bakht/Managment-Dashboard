import img1 from "../../assets/images/users/avatar-1.png"
import img2 from "../../assets/images/users/avatar-2.png"
import img3 from "../../assets/images/users/avatar-3.png"


import "../../assets/libs/apexcharts/apexcharts.min.js"

import Chart from 'react-apexcharts';


const AttendenceReport = () => {

    const dataColors = [
       "#66b3ff", "#8bc34a", "#ffecb3", "#ff9999", "#87ceeb", "#454f55", "#a57ff5", "#ffd98c"
      ];
    
      const options = {
        chart: {
          type: 'donut',
          height: 200,
        },
        colors: dataColors,
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        tooltip: {
          enabled: true,
          y: {
            formatter: (val) => `${val}%`,
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: '65%',
            }
          }
        },
        labels: ["Akbar", "Umer", "Khan", "Sami", "Saad", "Asad", "Abaas", "Jawad", "Waleed", "Sheery"],
      };
    
      const series = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50]; // Values for each segment
    
    return (
        <>


            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xxl-9">
                                {/* <!--& Attendece Report--> */}
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="card-icon">
                                                    <i className="fas fa-hockey-puck fs-14 text-muted"></i>
                                                </div>
                                                <h4 className="card-title mb-0">Attendence</h4>
                                            </div>
                                            <div className="card-body">
      <div className="row">
        {/* Left Side with Names and Icons */}
        <div className="col-sm-6">
          <div className="row mb-2">
            <div className="col-6">
              <p><i className="mdi mdi-brightness-5 text-primary me-2"></i>Akbar <span className="text-muted fs-14">-50%</span></p>
            </div>
            <div className="col-6">
              <p><i className="mdi mdi-briefcase-variant-outline text-danger me-2"></i>Umer <span className="text-muted fs-14">-50%</span></p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-6">
              <p><i className="mdi mdi-cart-arrow-right text-info me-2"></i>Khan <span className="text-muted fs-14">-50%</span></p>
            </div>
            <div className="col-6">
              <p><i className="mdi mdi-checkbox-multiple-blank text-warning me-2"></i>Sami <span className="text-muted fs-14">-50%</span></p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-6">
              <p><i className="mdi mdi-chess-queen text-success me-2"></i>Saad <span className="text-muted fs-14">-50%</span></p>
            </div>
            <div className="col-6">
              <p><i className="mdi mdi-church text-info me-2"></i>Asad <span className="text-muted fs-14">-50%</span></p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-6">
              <p><i className="mdi mdi-city text-warning me-2"></i>Abaas <span className="text-muted fs-14">-50%</span></p>
            </div>
            <div className="col-6">
              <p><i className="mdi mdi-currency-usd-circle text-primary me-2"></i>Jawad <span className="text-muted fs-14">-50%</span></p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-6">
              <p><i className="mdi mdi-gamepad-circle text-danger me-2"></i>Waleed <span className="text-muted fs-14">-50%</span></p>
            </div>
            <div className="col-6">
              <p><i className="mdi mdi-hexagon-multiple text-info me-2"></i>Sheery <span className="text-muted fs-14">-50%</span></p>
            </div>
          </div>
        </div>

        {/* Right Side with Chart */}
        <div className="col-sm-6">
          <div id="gradient_chart" dir="ltr">
            <Chart options={options} series={series} type="donut" height={200} />
          </div>
        </div>
      </div>
    </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="card" style={{ overflowY: "auto", height: "304px" }} data-simplebar="init">
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
                                                                        <img src={img1} alt="Avatar image" className="avatar-2xs" />
                                                                    </div>
                                                                    <div className="avatar avatar-circle">
                                                                        <img src={img2} alt="Avatar image" className="avatar-2xs" />
                                                                    </div>
                                                                    <div className="avatar avatar-circle">
                                                                        <img src={img3} alt="Avatar image" className="avatar-2xs" />
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


                        </div>
                    </div>
                    {/* <!-- end container-fluid --> */}
                </div>
            </div>


            <div className="custom-setting bg-primary pe-0 d-flex flex-column rounded-start">
                <button type="button" className="btn btn-wide border-0 text-white fs-20 avatar-sm rounded-end-0" id="light-dark-mode">
                    <i className="mdi mdi-brightness-7 align-middle"></i>
                    <i className="mdi mdi-white-balance-sunny align-middle"></i>
                </button>
            </div>




        </>
    )
}

export default AttendenceReport