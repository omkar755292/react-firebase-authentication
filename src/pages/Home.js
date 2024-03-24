import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'

const Home = () => {
  const { user, logout } = useUserAuth();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div>
      <h1> hello form {user.displayName} </h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home