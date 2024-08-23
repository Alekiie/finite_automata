import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export const Login = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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

        const { email, password } = formData;
        const response = await login(email, password);

        if (response.success) {
            setSuccess(response.message);
            setError('');
        } else {
            setError(response.message);
            setSuccess('');
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900 flex items-center justify-center min-h-screen p-4">
            <div className="flex flex-col lg:flex-row p-4 lg:p-8 mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-3xl w-full">
                <div
                    className="hidden lg:block lg:w-2/5 bg-cover rounded-lg"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')"}}
                >
                </div>

                <div className="flex flex-col w-full lg:w-3/5 p-6">
                    <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                        Welcome Back to Finite Automata & Regular Languages
                    </h1>

                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        Please log in to access your account and continue exploring resources for Finite Automata and Regular Languages.
                    </p>

                    {error && <p className="mt-4 text-red-500">{error}</p>}
                    {success && <p className="mt-4 text-green-500">{success}</p>}

                    <form className="grid grid-cols-1 gap-6 mt-8" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="johnsnow@example.com"
                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
                                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex items-center justify-center w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        >
                            <span>Log In</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
