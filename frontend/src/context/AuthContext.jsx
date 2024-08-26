import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    // Check for user data in localStorage on initial load
    const storedUser = localStorage.getItem("user");
    console.log(storedUser);
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      if (parsedUser.accessToken) {
        setAuthState({
          isAuthenticated: true,
          user: parsedUser,
        });
      }
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      const { userData } = response.data;

      localStorage.setItem("user", JSON.stringify(userData));

      setAuthState({
        isAuthenticated: true,
        user: userData,
      });

      return { success: true, message: response.data.message };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
