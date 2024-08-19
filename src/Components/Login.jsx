import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/isLoginUser'

const Login = () => {
  const { isLogin, login, logout } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // New loading state
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('All Fields required!');
      return;
    }

    setLoading(true); // Set loading to true when starting the API request

    try {
      const response = await fetch(`https://ies-server.vercel.app/user/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (data.msg) {
        toast.success(data.msg);
        login();
        localStorage.setItem("ies-user-email", email);
        navigate("/");
      } else if (data.err) {
        toast.error(data.err);
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false); // Set loading to false after API request is complete
    }
  };

  return (
    <div className='py-0 my-0'>
      <Toaster />
      <section className="bg-gray-50 dark:bg-gray-900 py-0 my-0">
        <div className="m-auto px-6 mx-auto md:h-screen lg:py-0 shadow-2xl py-0 my-0">
          <div className="w-full bg-white shadow-2xl rounded-xl dark:border md:mt-0 sm:max-w-md mx-auto xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login Here...
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <input
                    type="text"
                    name="email"
                    className="bg-gray-50 border rounded-full border-gray-800 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email address ...."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="bg-gray-50 border rounded-full border-gray-800 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your Password ...."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <button
                  type="submit"
                  className="block bg-white text-black border-2 border-black px-4 py-2 rounded-full text-center bg-black-800 hover:bg-black hover:text-white hover:bg-black-900 transition duration-[0.5s] w-full"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? 'Login......' : 'Login'} {/* Show 'Login...' while loading */}
                </button>
                <button className="flex items-center justify-center bg-white text-black border-2 border-black px-4 py-2 rounded-full text-center hover:bg-black hover:text-white transition duration-[0.5s] w-full">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                    alt="Google Logo"
                    className="w-6 h-6 mr-2"
                  />
                  Sign in with Google
                </button>
                <p className="text-sm font-light text-gray-800 text-center dark:text-gray-400">
                  Don’t have an account yet?{' '}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline hover:text-blue-700"
                  >
                    Signup Here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
