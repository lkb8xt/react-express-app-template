import React from 'react';

const User = props => {
    return(
        <li>{props.name}, age {props.age}</li>
    )
}

export default User;