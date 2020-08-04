import React from 'react';
import './Request.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Request = (props) => {
    const{name, username, yearlyIncome, image, bio} = props.request;
    return (
        <div className='request'>
            <div className='request-image'>
                <img src={image} alt=""/>
            </div>
            <div className="request-details">
                <h3>{name} <small>(@{username})</small></h3>
                <h4>Yearly income: BDT. {yearlyIncome}</h4>
                <p><small><b>{bio}</b></small></p>
                <button className='acceptBtn' onClick={() => props.accept(props.request)}>
                    <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> Accept request
                </button>
            </div>
        </div>
    );
};

export default Request;