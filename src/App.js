import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

const App = () => {

  return (
    <Router>
      <Routes>
        {/* default route to loginform page */}
        <Route path="/" element={<Login />} />
        {/* dynamic dashboard routing after accepting the user ID as a parameter */}
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
