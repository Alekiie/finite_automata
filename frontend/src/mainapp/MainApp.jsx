import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';

// import pages
import { Signup } from "../pages/Signup.jsx";
import { Login } from "../pages/Login.jsx";

function App() {

    return (
        <>
            <div className="w-full min-h-full flex items-center justify-center bg-gradient-to-br from-teal-100 via-blue-200 to-teal-200">
                <Router>
                    <Routes>
                        <Route path="/" element={<Signup/>} />
                        <Route path="/login" element={<Login/>} />
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default App
