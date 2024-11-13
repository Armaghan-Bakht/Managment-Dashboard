
const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (

        <div>

            <footer className="footer">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            {getCurrentYear()} © Clivax.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-end d-none d-sm-block">
                                {/* <!-- Crafted with <i className="mdi mdi-heart text-danger"></i> by <a href="https://github.com/jawadhassan100" target="_blank" className="text-muted">Jawad Khan</a> --> */}
                                Design & Developed by <i className="mdi mdi-heart text-danger"></i> by <a href="https://solushyfy.com" target="_blank" className="text-muted">Solushyfy Pvt Ltd.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer