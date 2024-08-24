import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

// import pages
import {Signup} from "../pages/Signup";
import {Login} from "../pages/Login";
import {Dashboard} from '../pages/Dashboard';
import { Profile } from '../pages/Profile';
import {Modules} from '../pages/Modules';
import {Instructors} from '../pages/Instructors';


// import components
import Navbar from '../components/NavBar';
import Sidebar from '../components/Sidebar';




function MainApp() {
    const { authState } = useContext(AuthContext);

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 via-blue-200 to-teal-200">
            <Router>
                <Navbar/>
                <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <Routes>
                    <Route path="/" element={authState.isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />} />
                    <Route path="/login" element={authState.isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
                    {/* Define other routes here */}
                    <Route path="/dashboard" element={authState.isAuthenticated ? <Dashboard sidebarOpen={sidebarOpen} /> : <Navigate to="/login" />} />
                    <Route path="/profile" element={authState.isAuthenticated ? <Profile sidebarOpen={sidebarOpen}/> : <Navigate to="/login" />} />
                    <Route path="/modules" element={authState.isAuthenticated ? <Modules sidebarOpen={sidebarOpen} /> : <Navigate to="/login" />} />
                    <Route path="/instructors" element={authState.isAuthenticated ? <Instructors sidebarOpen={sidebarOpen} /> : <Navigate to="/login" />} />
                </Routes>
            </Router>
        </div>
    );
}

export default MainApp;
