import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from "react-icons/fa";
import { Helmet, } from 'react-helmet';
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, googleLogin, gitHubLogin } = useContext(AuthContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageUrl = form.imageUrl.value;

    try {
      if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
        throw new Error("Password must have at least 6 characters, one uppercase, and one lowercase letter.");
      }

      const result = await createUser(email, password, name, imageUrl);
      const loggedUser = result.user;
      toast.success("User created successfully.");

      updateProfile(loggedUser, {
        displayName: name,
        photoURL: imageUrl
      });

      setTimeout(() => {
        navigate('/');
      }, 5000);


    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess(toast("User Login Successfully"));
        setTimeout(() => {
          navigate('/');
        }, 5000);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleGitHubSignIn = () => {
    gitHubLogin()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess(toast("User Login Successfully"));
        setTimeout(() => {
          navigate('/');
        }, 5000);
      })
      .catch(error => {
        setError(toast(error.message));
      });
  };


  return (
    <div className="flex justify-center items-center h-screen ">
      <Helmet>
        <title>GroupGrid || Register</title>
      </Helmet>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 pr-10"
              placeholder="Enter your password"
              name="password"
              required
            />
            <button type="button" className="absolute inset-y-0 right-0 mt-6 px-3 py-2" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="mb-4">
            <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
            <input
              type="text"
              id="imageUrl"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your image URL"
              name="imageUrl"
              required
            />
          </div>
          <button type="submit" className="w-full bg-[#63AB45] text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-[#488f2a]">Sign Up</button>
        </form>
        <div className="mt-4">
          <p className="text-sm text-gray-600">Or sign up with</p>
          <div className="flex mt-2">
            <button onClick={handleGoogleSignIn} className="w-1/2 bg-[#63AB45] text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none">Google</button>
            <button onClick={handleGitHubSignIn} className="w-1/2 bg-gray-800 text-white font-bold py-2 px-4 rounded ml-2 focus:outline-none">GitHub</button>
          </div>
          <p className="text-sm mt-2 text-gray-600">Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in here</Link></p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
