import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ children }) => {
    const navigate = useNavigate();

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:4000/logout');
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <nav className="navbar is-light" role="navigation" aria-label="main navigation">
                <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28"/>
                </a>
            
                <a href='/' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>
            
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a href='/' className="navbar-item">
                        Home
                    </a>
                </div>
            
                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <button onClick={Logout} className="button is-info is-outlined">
                        Logout
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </nav>
            <div className="container">{children}</div>
        </div>
    )
}

export default Navbar;