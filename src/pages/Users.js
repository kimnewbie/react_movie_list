import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from './UserList';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data)
        })
    },[]);

    return (
        <div>
            <h1>Users</h1>
            <UserList users={users}/>
        </div>
    )
}
