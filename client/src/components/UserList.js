import React from 'react';
import User from './User';

const UserList = props => {
    return(
        <ul className="user-list">
            {props.users.map(user => 
                <User name={user.name} age={user.age}/>
            )}
        </ul>
    )
}

export default UserList;