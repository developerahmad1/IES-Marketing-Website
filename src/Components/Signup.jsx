import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Context/isLoginUser';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const { isLogin, login, logout } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false); // State for loading
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) {
            navigate("/");
        }
    }, [isLogin, navigate]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword) {
            toast.error('Please fill all fields.');
            return;
        }

        if (!validateEmail(email)) {
            toast.error('Please enter a valid email.');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }

        if (password.length < 8) {
            toast.error('Password should be at least 8 characters.');
            return;
        }

        setLoading(true); // Set loading to true when starting the request

        try {
            const response = await fetch(`https://ies-server.vercel.app/user/signup`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();
            console.log("data : ", data);

            if (data.msg) {
                toast.success(data.msg);
                login();
                localStorage.setItem("ies-user-email", email);
                navigate("/");
            } else if (data.err) {
                toast.error(data.err);
            }
        } catch (error) {
            toast.error('An error occurred during signup.');
        } finally {
            setLoading(false); // Set loading to false after the request completes
        }
    };

    return (
        <div>
            <Toaster />
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="px-6 py-8 mx-auto md:h-screen lg:py-0 shadow-2xl">
                    <div className="w-full bg-white shadow-2xl rounded-xl dark:border mx-auto md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Signup Here...
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSignup}>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="bg-gray-50 border rounded-full border-gray-800 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your name here...."
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-gray-50 border rounded-full border-gray-800 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter your email address ...."
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-gray-50 border rounded-full border-gray-800 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Set your Password ...."
                                    />
                                    <span
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="bg-gray-50 border rounded-full border-gray-800 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Repeat the same Password ...."
                                    />
                                </div>

                                {/* <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                         <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-800 dark:text-gray-300">Remember me</label>
                                        </div> 
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div> */}

                                <button
                                    type="submit"
                                    className="block bg-white text-black border-2 border-black px-4 py-2 rounded-full text-center bg-black-800 hover:bg-black hover:text-white hover:bg-black-900 transition duration-[0.5s] w-full"
                                >
                                    {loading ? 'Signing up......' : 'Signup'}
                                </button>
                                <button className='flex items-center justify-center bg-white text-black border-2 border-black px-4 py-2 rounded-full text-center hover:bg-black hover:text-white transition duration-[0.5s] w-full'>
                                    <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="Google Logo" className='w-6 h-6 mr-2' />
                                    Sign in with Google
                                </button>
                                <p className="text-sm font-light text-gray-800 text-center dark:text-gray-400">
                                    Already Have an Account? <Link to="/login" className="font-medium text-primary-600 hover:underline hover:text-blue-700">Login Here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signup;
