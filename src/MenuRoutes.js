import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Application from './application'
function AppMenuRoutes() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="me">Application</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Application />} />        
      </Routes>
    </BrowserRouter>
  );
}
export default AppMenuRoutes;