import React from 'react';
import Footer from '../footer/Footer';

const Menu = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand">Mi proyecto</a>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contacto</a>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0">
                        <input className=" form-control mr-sm-2" type="text"/>
                        <button className="btn btn-outline-success my-2 my-sm-0">Sumbit</button>
                    </form>
                </div>
            </nav>
            <Footer />
        </div>
    );
}
 
export default Menu;