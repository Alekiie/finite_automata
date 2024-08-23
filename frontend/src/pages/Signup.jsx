import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

export const Signup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'student'
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/register', formData);
            setSuccess('Registration successful!');
            setError('');

            setTimeout(()=>{
                navigate('/login');
            },1000)
            console.log(response.data);
        } catch (err) {
            setError('Registration failed. Please try again.');
            console.error(err);
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900 flex items-center justify-center min-h-screen p-4">
            <div className="flex flex-col lg:flex-row p-4 lg:p-8 mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                <div
                    className="hidden lg:block lg:w-2/5 bg-cover rounded-lg"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')" }}
                >
                </div>

                <div className="flex flex-col w-full lg:w-3/5 p-6">
                    <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                        Learn Finite Automata & Regular Languages
                    </h1>

                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        Sign up to access resources and tools for mastering Finite Automata and Regular Languages. Select your role and get started!
                    </p>

                    {error && <p className="mt-4 text-red-500">{error}</p>}
                    {success && <p className="mt-4 text-green-500">{success}</p>}

                    <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                            <input
                                id="firstName"
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="John"
                                className="block w-full px-2 py-1 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                            <input
                                id="lastName"
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Snow"
                                className="block w-full px-2 py-1 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="johnsnow@example.com"
                                className="block w-full px-2 py-1 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="block w-full px-2 py-1 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                                required
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label htmlFor="role" className="block mb-1 text-sm text-gray-600 dark:text-gray-200">Select Your Role</label>
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="block w-full px-2 py-1 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700"
                            >
                                <option value="student">Student</option>
                                <option value="admin">Admin</option>
                                <option value="instructor">Instructor</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="flex items-center justify-center w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring"
                        >
                            <span>Sign Up</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
