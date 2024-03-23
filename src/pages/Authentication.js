import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import Avtar from '../components/Avtar';
import GoogleButton from 'react-google-button'
import UserAuthContextProvider from '../context/UserAuthContext';

const Authentication = () => {
    return (
        <UserAuthContextProvider>
            <Avtar />
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
            </Routes>
            <GoogleButton onClick={() => { console.log('Google button clicked') }} className='m-3' type='dark' />
        </UserAuthContextProvider>
    )
}

export default Authentication