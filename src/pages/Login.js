import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
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
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email"
                        class="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            props.setEmail5(e.target.value);
                        }}
                    />
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
                <div>
                    <button type="submit" class="btn btn-primary mx-1 w-50">Submit</button>&nbsp;
                    <Link to="/register" className='w-50 mx-1'>Register</Link>&nbsp;
                </div>
            </form>
        </div>
    )
}

export default Login