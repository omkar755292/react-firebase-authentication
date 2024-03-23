import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Avtar from './components/Avtar';
import GoogleButton from 'react-google-button'
import { useUserAuth } from './context/UserAuthContext';

const Authentication = () => {
    const { loginWithGoogle, forgetPassword } = useUserAuth();
    const [email5, setEmail5] = useState('');

    const navigate = useNavigate();
    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        try {
            await loginWithGoogle();
            navigate('/home');
        } catch (error) {
            alert(error.message);
        }
    }

    const forgetPasswordHandler = async (e) => {
        e.preventDefault();
        try {
            await forgetPassword(email5);
            setEmail5('');
            alert("Chenck Email")
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className='d-flex justify-content-center m-4'>
            <div>
                <Avtar />
                <Routes>
                    <Route exact path='/' element={<Login setEmail5={setEmail5} />} />
                    <Route exact path='/login' element={<Login setEmail5={setEmail5} />} />
                    <Route exact path='/register' element={<Register />} />
                </Routes>
                <div className='d-flex flex-column justify-content-center'>
                    <GoogleButton onClick={handleGoogleLogin} className='mt-3' type='dark' />
                    <button onClick={forgetPasswordHandler} class="btn btn-link">Forget Password</button>
                </div>
            </div>
        </div>

    )
}

export default Authentication