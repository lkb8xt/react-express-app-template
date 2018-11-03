import React, {Component} from 'react';
import UserList from './UserList';

class UserListContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    render(){
        return (
            <UserList users={this.state.users} />
        )        
    }

    componentDidMount(){
        fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({users: users}))
    }
}

export default UserListContainer;