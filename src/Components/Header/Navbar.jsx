import { useContext, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem('theme') : "light")

    const handleToggle = (e) => {
        setTheme(e.target.checked ? "dark" : "light");

    };


    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);
    return (
        <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
            <div className='flex-1'>
                <Link to='/' className='capitalize flex gap-2 items-center'>
                    <img className='w-[50px] rounded-full' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDrAoBLTtWUpakNVQwswakTQ2IKmS_x6IVUPK1oP65Q&s'} alt='' />
                    <span className='font-bold'>GROUPGRID</span>
                </Link>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link className='capitalize' to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='capitalize' to='/assignments'>assignments</Link>
                    </li>
                    <li>
                        <Link className='capitalize' to='/create'>create assignment</Link>
                    </li>
                    <li>
                        <Link className='capitalize' to='/pending'>pending assignments</Link>
                    </li>

                    {!user && (
                        <li>
                            <Link className='capitalize' to='/login'>Login</Link>
                        </li>
                    )}
                </ul>

                {user && (
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div title={user?.displayName} className='w-10 rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <Link to='/attempted-assignments' className='justify-between capitalize'>
                                    attempted assignments
                                </Link>
                            </li>

                            <li className='mt-2'>
                                <button
                                    onClick={logOut}
                                    className='w-full flex justify-center px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-blue-500 to-purple-500 rounded-md lg:w-auto hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}

          
            </div>
        </div>
    )
}

export default Navbar



