import React from 'react'
import dashboard from '../../img/dashboard.svg'
const Header = () => {

    return(
        <div className="min-height-100 bg-primary position-absolute w-100">
            <nav className="navbar navbar-main navbar-expand-lg  px-0 mx-4 shadow-none border-radius-xl z-index-sticky "
                 id="navbarBlur" data-scroll="false">
                <div className="container-fluid py-1 px-3">
                    <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                        <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                            <div className="card">
                                <div className="card-horizontal">
                                    <div className="img-square-wrapper">
                                        <img className="" src={dashboard} alt="Card image cap" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-title">Card title</p>
                                        <p className="card-text">Some.</p>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="container">*/}
                            {/*    <div className="row">*/}
                            {/*        <div className="col-sm">*/}
                            {/*            */}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header