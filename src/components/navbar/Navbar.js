import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FaUsers} from 'react-icons/fa';
import Logout from '../Logout';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-info">
                <div className="container">
                        <li className="nav-item">
                          <Link className="navbar-brand" href="/">
                            <FaUsers />
                          </Link>
                        </li>
                </div>
                <div className="container">
                    <ul className="nav nav-tabs ml-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/">Contact Us</a>
                        </li>
                        <li>
                          <Logout />
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;