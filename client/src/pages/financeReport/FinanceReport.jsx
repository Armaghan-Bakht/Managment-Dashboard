import { useState } from 'react';
import Chart from 'react-apexcharts';


const chartData = {
    series: [{
        name: 'Series 1',
        data: [44, 55, 41, 67, 22, 43, 21, 49, 63, 70, 54, 43]
    }, {
        name: 'Series 2',
        data: [13, 23, 20, 8, 13, 27, 18, 22, 17, 29, 18, 19]
    }],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
};

const FinanceReport = () => {

    const [options, setOptions] = useState({
        chart: {
            type: 'bar',
            height: 350,
            stacked: true
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '7%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: chartData.xaxis.categories
        }
    });

    console.log(setOptions)

    // const donutOptions = {
    //     seriesData: [44, 55, 41, 17, 15],  // Updated series data variable
    //     chart: {
    //         type: 'donut'
    //     },
    //     plotOptions: {
    //         pie: {
    //             donut: {
    //                 labels: {
    //                     show: true,
    //                     total: {
    //                         showAlways: true,
    //                         show: true,
    //                         label: 'Total',
    //                         fontSize: '16px',
    //                         fontWeight: 600,
    //                         color: '#333', 
    //                     }
    //                 }
    //             }
    //         }
    //     },
    //     labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    //     fill: {
    //         type: 'pattern',
    //         pattern: {
    //             enabled: true,
    //             style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines']
    //         },
    //     },
    //     legend: {
    //         show: false  // Hides the legend for a cleaner look
    //     }
    // };

    const donutOptions = {
        seriesData: [44, 55, 41, 17, 15],
        chart: {
            type: 'donut'
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            showAlways: true,
                            show: true,
                            label: 'Total',
                            fontSize: '16px',
                            fontWeight: 600,
                            color: '#333',
                        }
                    }
                }
            }
        },
        labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
        dataLabels: {
            enabled: false  // Disables percentage labels on each slice
        },
        fill: {
            type: 'pattern',
            pattern: {
                enabled: true,
                style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
                opacity: 0.3,  // Reduces opacity of pattern for a cleaner look
            },
        },
        legend: {
            show: false  // Hides the legend for a cleaner look
        }
    };

    // const ChartOptions = {
    //     chart: {
    //         type: 'bar',
    //         height: 150,
    //         stacked: true,
    //         toolbar: {
    //             show: false
    //         }
    //     },
    //     plotOptions: {
    //         bar: {
    //             colors: {
    //                 ranges: [
    //                     { from: -10000, to: 0, color: '#FF4560' },
    //                     { from: 1, to: 10000, color: '#008FFB' }
    //                 ]
    //             },
    //             columnWidth: '100%',
    //             barHeight: '100%'
    //         }
    //     },
    //     dataLabels: {
    //         enabled: false
    //     },
    //     xaxis: {
    //         type: 'datetime',
    //         labels: {
    //             format: "MMM 'yy"
    //         }
    //     },
    //     yaxis: {
    //         labels: {
    //             formatter: function (val) {
    //                 return val.toFixed(0) + 'k';
    //             }
    //         }
    //     },
    //     grid: {
    //         show: false
    //     },
    //     title: {
    //         text: '',
    //         align: 'center'
    //     },
    //     series: [
    //         {
    //             name: 'Sales',
    //             data: [
    //                 // Your sales data points for each month
    //                 { x: new Date('2021-07-01'), y: 15000 },
    //                 { x: new Date('2021-08-01'), y: -10000 },
    //                 // ...
    //             ]
    //         },
    //         {
    //             name: 'Expenses',
    //             data: [
    //                 // Your expense data points for each month
    //                 { x: new Date('2021-07-01'), y: -5000 },
    //                 { x: new Date('2021-08-01'), y: -15000 },
    //                 // ...
    //             ]
    //         }
    //     ]
    // };

    const series = [
        {
            name: 'Monthly Data',
            data: [
                { x: new Date(2021, 6, 1), y: 20000 },
                { x: new Date(2021, 9, 1), y: -15000 },
                { x: new Date(2022, 2, 1), y: 30000 },
                { x: new Date(2023, 1, 1), y: -50000 },
                { x: new Date(2023, 5, 1), y: 10000 },
                // Add more data points here as needed
            ]
        }
    ];

    const ChartOptions = {
        chart: {
            type: 'bar',
            height: 150,
            stacked: true, // Changed from false to true
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                colors: {
                    ranges: [
                        { from: -10000, to: 0, color: '#FF4560' },
                        { from: 1, to: 10000, color: '#008FFB' }
                    ]
                },
                columnWidth: '100%',
                barHeight: '100%',
                horizontalBars: false,
                stacking: 'normal' // Optional, but recommended for stacked charts
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            type: 'datetime',
            labels: {
                format: "MMM 'yy"
            }
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val.toFixed(0) + 'k';
                }
            }
        },
        grid: {
            show: false
        },
        title: {
            text: '',
            align: 'center'
        },
        series: [
            {
                name: 'Sales',
                data: [
                    // Your sales data points for each month
                    { x: new Date('2021-07-01'), y: 15000 },
                    { x: new Date('2021-08-01'), y: -10000 },
                    // ...
                ]
            },
            {
                name: 'Expenses',
                data: [
                    // Your expense data points for each month
                    { x: new Date('2021-07-01'), y: -5000 },
                    { x: new Date('2021-08-01'), y: -15000 },
                    // ...
                ]
            }
        ]
    };


    return (
        <>
            {/* <!-- Start right Content here --> */}
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xxl-9">
                                {/* <!--& Finance Report--> */}
                                <div className="card">
                                    {/* <!-- & card 1 --> */}
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="d-flex justify-content-between align-content-end shadow-lg p-3">
                                                    <div>
                                                        <p className="text-muted text-truncate mb-2">Income</p>
                                                        <h5 className="mb-0">$12,253</h5>
                                                    </div>
                                                    <div className="text-success float-end">
                                                        <i className="mdi mdi-menu-up"> </i>2.2%
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-sm-4">
                                                <div className="d-flex justify-content-between align-content-end shadow-lg p-3">
                                                    <div>
                                                        <p className="text-muted text-truncate mb-2">Expense</p>
                                                        <h5 className="mb-0">$34,254</h5>
                                                    </div>
                                                    <div className="text-success float-end">
                                                        <i className="mdi mdi-menu-up"> </i>2.1%
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="d-flex justify-content-between align-content-end shadow-lg p-3">
                                                    <div>
                                                        <p className="text-muted text-truncate mb-2">Banner</p>
                                                        <h5 className="mb-0">$32,695</h5>
                                                    </div>
                                                    <div className="text-success float-end">
                                                        <i className="mdi mdi-menu-up"> </i>1.8%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <Chart options={options} series={chartData.series} type="bar" height={350} />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- & card2 --> */}
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="card bg-danger-subtle" style={{
                                            background: `url('assets/images/dashboard/dashboard-shape-1.png')`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'bottom center',
                                        }}>
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-sm avatar-label-danger">
                                                        <i className="mdi mdi-buffer mt-1"></i>
                                                    </div>
                                                    <div className="ms-3">
                                                        <p className="text-danger mb-1">Total Income</p>
                                                        <h4 className="mb-0">$1,452.55</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="card bg-success-subtle" style={{
                                            background: `url('assets/images/dashboard/dashboard-shape-2.png')`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'bottom center',
                                        }}>
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-sm avatar-label-success">
                                                        <i className="mdi mdi-cash-usd-outline mt-1"></i>
                                                    </div>
                                                    <div className="ms-3">
                                                        <p className="text-success mb-1">Total Expense</p>
                                                        <h4 className="mb-0">$120</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4">
                                        <div className="card bg-info-subtle" style={{
                                            background: `url('assets/images/dashboard/dashboard-shape-3.png')`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'bottom center',
                                        }}>
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="avatar avatar-sm avatar-label-info">
                                                        <i className="mdi mdi-webhook mt-1"></i>
                                                    </div>
                                                    <div className="ms-3">
                                                        <p className="text-info mb-1">Total Banner</p>
                                                        <h4 className="mb-0">72</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- & card 3 --> */}
                                <div className="col-xxl-3">
                                    <div className="row">
                                        <div className="col-xxl-12 col-xl-6 order-1">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="float-end">
                                                        <select className="form-select form-select-sm">
                                                            <option selected>Apr</option>
                                                            <option value="1">Mar</option>
                                                            <option value="2">Feb</option>
                                                            <option value="3">Jan</option>
                                                        </select>
                                                    </div>
                                                    <h4 className="card-title mb-4">Expense By Catagory</h4>
                                                    <div className="donut-chart-container">
                                                        <Chart options={donutOptions} series={donutOptions.seriesData} type="donut" width="200" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="text-center mt-4">
                                                            <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-primary font-size-10 me-1"></i> ContracCure</p>
                                                            <h5>42 %</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="text-center mt-4">
                                                            <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-success font-size-10 me-1"></i>Food Delivery App</p>
                                                            <h5>26 %</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="text-center mt-4">
                                                            <p className="mb-2 text-truncate"><i className="mdi mdi-circle text-warning font-size-10 me-1"></i>School Management</p>
                                                            <h5>42 %</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-12 col-xl-6 order-2 order-xxl-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="card-icon">
                                                    <i className="fas fa-calendar-alt fs-14 text-muted"></i>
                                                </div>
                                                <h4 className="card-title mb-0">Monthly Sales</h4>
                                            </div>
                                            <div className="card-body">
                                                <div id="monthly_states" className="apex-charts">
                                                    <Chart options={ChartOptions} series={series} type="bar" height={150} />
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
            {/* <!-- End Page-content --> */}
            <div className="custom-setting bg-primary pe-0 d-flex flex-column rounded-start" >
                <button type="button" className="btn btn-wide border-0 text-white fs-20 avatar-sm rounded-end-0" id="light-dark-mode">
                    <i className="mdi mdi-brightness-7 align-middle"></i>
                    <i className="mdi mdi-white-balance-sunny align-middle"></i>
                </button>
            </div >
        </>
    )
}

export default FinanceReport