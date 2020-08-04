import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './RequestSection.css';
import Request from '../Request/Request';
import FriendStatus from '../FriendStatus/FriendStatus';

const RequestSection = () => {
    const [requests, setRequests] = useState(fakeData);
    const [friendStatus, setFriendStatus] = useState([]);

    const handleAccept = (friend) => {
        if(friend.status === "pending"){
            const newFriendStatus = [...friendStatus, friend];
            setFriendStatus(newFriendStatus);
            friend.status = "accepted";
        }
    }

    return (
        <section className='request-container'>
            <div className='requestList-container'>
                <ul>
                    {
                        requests.map(
                            x => <Request request={x} accept={handleAccept}></Request>
                        )
                    }
                </ul>
            </div>
            <div className='friendStatus-container'>
                <FriendStatus friendStatus={friendStatus}></FriendStatus>
            </div>
        </section>
    );
};

export default RequestSection;