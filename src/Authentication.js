import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Avtar from './components/Avtar';
import GoogleButton from 'react-google-button'
import { useUserAuth } from './context/UserAuthContext';

const Authentication = () => {
    const { loginWithGoogle } = useUserAuth();
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
    return (
        <div>
            <Avtar />
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
            </Routes>
            <GoogleButton onClick={handleGoogleLogin} className='m-3' type='dark' />
        </div>

    )
}

export default Authentication