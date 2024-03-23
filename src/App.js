import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserAuthContextProvider from './context/UserAuthContext';
import Authentication from './Authentication';
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  return (
    <div >
      <Router>
        <UserAuthContextProvider>
          <Routes >
            <Route exact path='/*' element={<Authentication />} />
            <Route exact path='/home/*' element={<ProtectedRoute > <Home /> </ProtectedRoute>} />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
