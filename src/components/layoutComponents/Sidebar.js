import React from 'react'
import dashboard from '../../img/dashboard.svg'
import assests from '../../img/assests.svg'
import sensor from '../../img/sensor.svg'

const Sidebar = () => {

    return(
        <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl
     my-3 fixed-start ms-4 " id="sidenav-main">
            <div className="sidenav-header">
                <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                   aria-hidden="true" id="iconSidenav"></i>
            </div>

            <div className="collapse navbar-collapse  w-auto h-auto" id="sidenav-collapse-main">
                <ul className="navbar-nav">

                    <li className="nav-item mt-4">
                        <a  href="#dashboardsExamples" className="nav-link active"
                            aria-controls="dashboardsExamples" role="button" aria-expanded="false">
                            <div
                                className="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
                                {/*<i className="ni ni-shop text-primary text-sm opacity-10"></i>*/}
                                <img src={dashboard} className='img-height'/>
                            </div>
                            <span className="nav-link-text ms-1">Dashboard</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a  href="#dashboardsExamples" className="nav-link"
                            aria-controls="dashboardsExamples" role="button" aria-expanded="false">
                            <div
                                className="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
                               {/*<i className="ni ni-shop text-primary text-sm opacity-10"></i>*/}
                                <img src={assests} className='img-height'/>
                            </div>
                            <span className="nav-link-text ms-1">Assets</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a  href="#dashboardsExamples" className="nav-link"
                            aria-controls="dashboardsExamples" role="button" aria-expanded="false">
                            <div
                                className="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
                                {/*<i className="ni ni-shop text-primary text-sm opacity-10"></i>*/}
                                <img src={sensor} className='img-height'/>
                            </div>
                            <span className="nav-link-text ms-1">Sensors</span>
                        </a>
                    </li>

                </ul>
            </div>
        </aside>
    )
}

export default Sidebar