import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
        accessToken: null,
    });

    useEffect(() => {
        // Check for token in localStorage on initial load
        const token = localStorage.getItem('accessToken');
        if (token) {
            setAuthState(prevState => ({
                ...prevState,
                isAuthenticated: true,
                accessToken: token,
            }));
            // Optionally fetch user info here
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            const { accessToken } = response.data;

            localStorage.setItem('accessToken', accessToken);

            setAuthState({
                isAuthenticated: true,
                user: null, // Optionally, you can fetch user info here
                accessToken,
            });

            return { success: true, message: response.data.message };
        } catch (error) {
            console.error(error);
            return { success: false, message: error.response?.data?.message || 'Login failed' };
        }
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        setAuthState({
            isAuthenticated: false,
            user: null,
            accessToken: null,
        });
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;