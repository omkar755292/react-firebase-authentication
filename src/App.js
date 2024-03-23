import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Home from './pages/Home';


function App() {

  return (
    <div className='container'>
      <Router>
        <Routes >
          <Route exact path='/*' element={<Authentication />} />
          <Route exact path='/home/*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
