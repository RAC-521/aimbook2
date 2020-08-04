import React from 'react';
import logo from '../../images/icon.PNG';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faUsers, faFileDownload, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
            <div className='header'>
                <img src={logo} alt="Logo"/>
                <div>
                    <nav>
                        <a href="#"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home</a>
                        <a href="#"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Profile</a>
                        <a href="#"><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon> Friends</a>
                        <a href="#"><FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon> Saved files</a>
                        <a class="active" href="/requests"><FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> Requests</a>
                    </nav>
                </div>
            </div>
    );
};

export default Header;