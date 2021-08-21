import React, { useState } from 'react'

export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const onSubmitForm = (e) => {
        e.preventDefault(); // submit 하면 화면이 사라져서
        console.log(userName, password)
    } 
    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input
                    placeholder="Username"
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                /><br />
                <input
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                /><br />
                <button type="submit">LogIn</button>
            </form>
        </div>
    )
}
