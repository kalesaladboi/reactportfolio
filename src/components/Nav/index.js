import React from 'react';
import {Route, Link} from 'react-router-dom';


function Nav() {

    return (
        <Route>
        <header>
            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">Kyle Miller</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link' to="/">About</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/portfolio">Portfolio</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/contact">Contact</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/resume">Resume</Link>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        </Route>
    )
}

export default Nav;