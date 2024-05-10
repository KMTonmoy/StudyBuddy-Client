import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageUrl = form.imageUrl.value;

    try {
      const result = await createUser(email, password, name, imageUrl);
      const loggedUser = result.user;
      console.log(loggedUser);
      setTimeout(() => {
        navigate('/');
      }, 5000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col-reverse w-full max-w-3xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:flex-row lg:max-w-4xl'>
        <form onSubmit={handleRegister} className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-4'>Sign Up</h2>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-lg font-medium text-gray-700'>
              Name
            </label>
            <input
              id='name'
              autoComplete='name'
              name='name'
              type='text'
              required
              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md h-12 px-4'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-lg font-medium text-gray-700'>
              Email Address
            </label>
            <input
              id='email'
              autoComplete='email'
              name='email'
              type='email'
              required
              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md h-12 px-4'
            />
          </div>
          <div className='mb-4 relative'>
            <label htmlFor='password' className='block text-lg font-medium text-gray-700'>
              Password
            </label>
            <div className='flex'>
              <input
                id='password'
                autoComplete='new-password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                required
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md h-12 px-4'
              />
              <button
                type='button'
                className='absolute inset-y-0 right-0 flex items-center justify-center p-2 focus:outline-none'
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FiEyeOff className='w-6 h-6 text-gray-500' />
                ) : (
                  <FiEye className='w-6 h-6 text-gray-500' />
                )}
              </button>
            </div>
          </div>
          <div className='mb-4'>
            <label htmlFor='imageUrl' className='block text-lg font-medium text-gray-700'>
              Image URL
            </label>
            <input
              id='imageUrl'
              autoComplete='url'
              name='imageUrl'
              type='url'
              required
              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md h-12 px-4'
            />
          </div>
          <button
            type='submit'
            className='w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4'
          >
            Sign Up
          </button>
          <div className='text-center text-lg text-gray-500'>
            Already have an account?{' '}
            <Link to='/login' className='text-indigo-600 hover:underline'>
              Sign In
            </Link>
          </div>
        </form>

        <img
          className='object-cover w-full h-auto lg:w-1/2'
          src='https://media.istockphoto.com/id/1266722645/photo/african-american-boy-using-laptop-and-waving-during-video-call-while-homeschooling.jpg?s=612x612&w=0&k=20&c=0JTguQ7uNmONphqrOy-Nl712jxWS4B_lDm5qiInT920='
          alt='Register Image'
        />
      </div>
    </div>
  );
};

export default Register;




