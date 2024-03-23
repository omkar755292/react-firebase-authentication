import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useUserAuth();
    const navigate = useNavigate();

    const add = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            setEmail('');
            setPassword('');
            navigate('/home');
        } catch (error) {
            alert(error.message);
        }

    }
    return (
        <div className='container mt-3'>
            <form onSubmit={add}>
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
                    <button type="submit" class="btn btn-primary">Submit</button>&nbsp;<Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}

export default Login