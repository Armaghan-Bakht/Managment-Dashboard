import img1 from '../../assets/images/avatar-1.jpg'
import img2 from '../../assets/images/avatar-2.jpg'
import img3 from '../../assets/images/avatar-5.jpg'


const Attendance = () => {
    return (
        <>

            <div className="main-content ">
                {/* <!--    end row -->
                <!-- & Employe Table --> */}

                <div className="page-content px-3">
                    <div className="card " >
                        <div className="card-header  d-flex justify-content-between">
                            <h2 className="card-title text-muted text-truncate" style={{ fontWeight: "bolder", fontSize: "25px" }}>Attendence</h2>

                        </div>
                        <div className="row dt-row"><div className="col-sm-12"><table id="datatable" className="table table-hover table-auto table-bordered table-striped dt-responsive nowrap dataTable no-footer dtr-inline" style={{ borderCollapse: "collapse", borderSpacing: "0px", width: "100%" }} aria-describedby="datatable_info">
                            <thead >
                                <tr />
                                <th className="sorting border px-2 py-2" tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" style={{ width: "100px" }} aria-label="Name: activate to sort column ascending">Employe Id</th>
                                <th className="sorting border px-2 py-2" tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" style={{ width: "1px" }} aria-label="Position: activate to sort column ascending">Image</th>
                                <th className="sorting border px-2 py-2 sorting_desc" tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" style={{ width: "139.4px" }} aria-label="Office: activate to sort column ascending" aria-sort="descending">Name</th>
                                <th className="sorting border px-2 py-2 sorting_desc" tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" style={{ width: "150px" }} aria-label="Office: activate to sort column ascending" aria-sort="descending">Date</th>
                                <th className="sorting border px-2 py-2 sorting_desc" tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" style={{ width: "100px" }} aria-label="Office: activate to sort column ascending" aria-sort="descending">Check In</th>
                                <th className="sorting border px-2 py-2 sorting_desc" tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" style={{ width: "100px" }} aria-label="Office: activate to sort column ascending" aria-sort="descending">Check Out</th>
                                <th className="sorting border px-2 py-2 sorting_desc" tabIndex="0" aria-controls="datatable" rowSpan="1" colSpan="1" style={{ width: "100px" }} aria-label="Office: activate to sort column ascending" aria-sort="descending">Status</th>
                            </thead>
                            <tbody className="" style={{ fontWeight: "lighter", margin: "50px 50px" }} >
                                <tr style={{ height: "20px" }} >
                                    <td className="dtr-control text-center " tabIndex="0" style={{ fontWeight: "bolder" }} >1</td>
                                    <td className="text-center"><img src={img1} alt="" className="" style={{ width: "38px", height: "38px", borderRadius: "50%" }} /></td>
                                    <td className="">John Doe</td>
                                    <td className="">2/4/24</td>
                                    <td className="text-center" style={{ fontSize: "large", color: "green" }}><i className="fas fa-check"></i> </td>
                                    <td className=" text-center" style={{ fontSize: "large", color: "red" }}> <i className=" mdi mdi-close-thick"></i></td>
                                    <td className=" text-center" style={{ fontSize: "large", fontWeight: "900" }}>P</td>
                                </tr>
                                <tr className="">
                                    <td className="dtr-control text-center " tabIndex="0" style={{ fontWeight: "bolder" }} >2</td>
                                    <td className="text-center"><img src={img2} alt="" className="" style={{ width: "38px", height: "38px", borderRadius: "50%" }} /></td>
                                    <td className="sorting_1 " >Mark Allen</td>
                                    <td className="">2/4/24</td>
                                    <td className="text-center" style={{ fontSize: "large", color: "red" }}><i className="mdi mdi-close-thick"></i> </td>
                                    <td className="text-center" style={{ fontSize: "large", color: "red" }}><i className="mdi mdi-close-thick"></i> </td>
                                    <td className=" text-center" style={{ fontSize: "large", fontWeight: "900" }}>A</td>
                                </tr>
                                <tr className="">
                                    <td className="dtr-control text-center " tabIndex="0" style={{ fontWeight: "bolder" }} >3</td>
                                    <td className="text-center"><img src={img3} alt="" className="" style={{ width: "38px", height: "38px", borderRadius: "50%" }} /></td>
                                    <td className="sorting_1">Judd Trump</td>
                                    <td className="">2/4/24</td>
                                    <td className="text-center" style={{ fontSize: "30px" }}>-</td>
                                    <td className="text-center" style={{ fontSize: "30px" }}>-</td>
                                    <td className=" text-center" style={{ fontSize: "large", fontWeight: "900" }}>L</td>
                                </tr>
                            </tbody>

                        </table></div></div>
                    </div>
                </div >
                {/* <!-- end container-fluid --> */}
                <div className="custom-setting bg-primary pe-0 d-flex flex-column rounded-start">
                    <button type="button" className="btn btn-wide border-0 text-white fs-20 avatar-sm rounded-end-0" id="light-dark-mode">
                        <i className="mdi mdi-brightness-7 align-middle"></i>
                        <i className="mdi mdi-white-balance-sunny align-middle"></i>
                    </button>
                </div>

            </div >

        </>
    )
}

export default Attendance