import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <nav className="bg-gray-900">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-lg font-semibold">
                            GroupGrid
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <ul className="flex items-center">
                            <li className="ml-6">
                                <Link to="/assignments" className="text-gray-300 hover:text-white">Assignments</Link>
                            </li>
                            {!user ? (
                                <>
                                    <li className="ml-6">
                                        <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
                                    </li>
                                    <li className="ml-6">
                                        <Link to="/register" className="text-gray-300 hover:text-white">Register</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="ml-6">
                                        <Link to="/create-assignment" className="text-gray-300 hover:text-white">Create Assignment</Link>
                                    </li>
                                    <li className="ml-6">
                                        <Link to="/pending-assignments" className="text-gray-300 hover:text-white">Pending Assignments</Link>
                                    </li>
                                    <li className="ml-6 relative">
                                        <button className="text-gray-300 hover:text-white focus:outline-none">
                                            <img src={user.avatar} alt="User Avatar" className="h-8 w-8 rounded-full" />
                                        </button>
                                        <ul className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1">
                                            <li>
                                                <Link to="/my-attempted-assignments" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">My Attempted Assignments</Link>
                                            </li>
                                            <li>
                                                <button onClick={logOut} className="block w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 focus:outline-none">Logout</button>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
