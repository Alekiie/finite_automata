import React, { useState, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

// import pages
import {Signup} from "../pages/Signup";
import {Login} from "../pages/Login";
import {Dashboard} from '../pages/Dashboard';
import { Profile } from '../pages/Profile';
import {Modules} from '../pages/Modules';
import {NewModule} from '../pages/NewModule';
import {Instructors} from '../pages/Instructors';
import { Learning } from '../pages/Learning';
import { ExercisesList } from '../pages/ExercisesList';
import { Algorithms } from '../pages/Algorithms';


// import components
import Navbar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import ModuleContent from '../components/ModuleContent';
import { TestComponent } from '../components/TestComponent';




function MainApp() {
    const { authState } = useContext(AuthContext);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-100 via-blue-200 to-teal-200">
            <Navbar/>
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <Routes>
                <Route path="/" element={authState.isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />} />
                <Route path="/login" element={authState.isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
                {/* Define other pages' routes here */}
                <Route path="/dashboard" element={authState.isAuthenticated ? <Dashboard/> : <Navigate to="/login" />} />
                <Route path="/profile" element={authState.isAuthenticated ? <Profile/> : <Navigate to="/login" />} />
                <Route path="/modules" element={authState.isAuthenticated ? <Modules /> : <Navigate to="/login" />} />
                <Route path="/learning" element={authState.isAuthenticated ? <Learning /> : <Navigate to="/login" />} />
                <Route path="/exercises" element={authState.isAuthenticated ? <ExercisesList /> : <Navigate to="/login" />} />
                <Route path="/test/:testIndex" element={authState.isAuthenticated ? <TestComponent /> : <Navigate to="/login" />} />
                <Route path="/algorithms" element={authState.isAuthenticated ? <Algorithms /> : <Navigate to="/login" />} />
                <Route path="/new_module" element={authState.isAuthenticated ? <NewModule /> : <Navigate to="/login" />} />
                <Route path="/module/:id" element={authState.isAuthenticated ? <ModuleContent/> : <Navigate to="/login" />} />
                <Route path="/instructors" element={authState.isAuthenticated ? <Instructors /> : <Navigate to="/login" />} />
            </Routes>
        </div>
    );
}

export default MainApp;
