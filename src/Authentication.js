import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Avtar from './components/Avtar';
import GoogleButton from 'react-google-button'

const Authentication = () => {
    return (
        <div>
            <Avtar />
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
            </Routes>
            <GoogleButton onClick={() => { console.log('Google button clicked') }} className='m-3' type='dark' />
        </div>

    )
}

export default Authentication