import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand">Dashboard</a>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">
                                Chart Static 1
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">Charts Dynamics</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about"> Chart Static 2</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
 
export default Menu;