import React, { useEffect } from 'react'
import axios from 'axios'

export default function Users() {
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
        })
    },[])

    return (
        <div>
            <h1>Users</h1>
        </div>
    )
}
