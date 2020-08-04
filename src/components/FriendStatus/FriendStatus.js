import React from 'react';
import './FriendStatus.css';

const FriendStatus = (props) => {
    const friendStatus = props.friendStatus;
    const total = friendStatus.reduce( (total, rqst) => total + rqst.yearlyIncome, 0);
    return (
        <div className='friendStatus'>
            <h2 className='friendStatus-header'>Friendship Status</h2>
            <h3>Friends added: {friendStatus.length}</h3>
            <h3>Total income: BDT. {total}</h3>
        </div>
    );
};

export default FriendStatus;