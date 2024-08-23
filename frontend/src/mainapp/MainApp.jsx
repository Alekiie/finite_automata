import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

// import pages
import {Signup} from "../pages/Signup";
import {Login} from "../pages/Login";
import {Dashboard} from '../pages/Dashboard';

// import components
import Navbar from '../components/NavBar';


function MainApp() {
    const { authState } = useContext(AuthContext);

    return (
        <div className="w-full min-h-full flex items-center justify-center bg-gradient-to-br from-teal-100 via-blue-200 to-teal-200">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={authState.isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />} />
                    <Route path="/login" element={authState.isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
                    {/* Define other routes here */}
                    <Route path="/dashboard" element={authState.isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
                </Routes>
            </Router>
        </div>
    );
}

export default MainApp;
