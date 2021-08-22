import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router';

export default function User() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); // path : '/users/:id'

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users/'+id)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
    }, []);

    const userDetail = loading ? <Spinner/> : (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </div>
    )

    return (
        <div>
            <h1>User Infomation</h1>
            {userDetail}
        </div>
    )
}
