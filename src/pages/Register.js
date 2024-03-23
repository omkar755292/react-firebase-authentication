import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useUserAuth();
    const navigate = useNavigate();
    
    const add = async (e) => {
        e.preventDefault();
        try {
            await register(email, password);
            setUserName('');
            setEmail('');
            setPassword('');
            navigate('/login');
        } catch (error) {
            alert(error.message);
        }

    }
    return (
        <div className='container mt-3'>
            <form onSubmit={add}>
                <div class="mb-3">
                    <label class="form-label">Enter Your Full Name</label>
                    <input type="name"
                        class="form-control"
                        id="name"
                        value={username}
                        onChange={(e) => { setUserName(e.target.value) }} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email"
                        class="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className='container'>
                    <button type="submit" class="btn btn-primary">Submit</button> &nbsp;<Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register