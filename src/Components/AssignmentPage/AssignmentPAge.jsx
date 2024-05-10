import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const AssignmentPage = () => {
    const { user, loading } = useContext(AuthContext);
    const [filter, setFilter] = useState('All');
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/assignment');
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching assignments:', error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (_id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/assignment/${_id}`);
            if (response.status === 200) {
                setJobs(jobs.filter(assignment => assignment._id !== _id));
                Swal.fire(
                    'Deleted!',
                    'Your Assignment has been deleted.',
                    'success'
                );
            }
        } catch (error) {
            console.error('Error deleting Assignment:', error);
        }
    };

    const renderDescription = (job) => {
        const words = job.description.trim().split(/\s+/);
        const maxWordsToShow = 25;

        if (words.length <= maxWordsToShow) {
            return <p className="text-gray-600">{job.description}</p>;
        } else {
            const truncatedDescription = words.slice(0, maxWordsToShow).join(' ');
            return (
                <>
                    <p className="text-gray-600">{truncatedDescription}</p>
                    <Link to={`/assignment/${job._id}`} className="text-blue-500 hover:underline">Show More</Link>
                </>
            );
        }
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div>
            <div className="my-4">
                <h2 className="text-3xl font-bold text-center my-20">Assignments</h2>
                <label htmlFor="difficultyFilter" className="mr-2">Filter by Difficulty Level:</label>
                <select id="difficultyFilter" value={filter} onChange={handleFilterChange}>
                    <option value="All">All</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            {jobs
                .filter(job => filter === 'All' || job.difficultyLevel.toLowerCase() === filter.toLowerCase())
                .map(job => (
                    <div key={job._id}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="capitalize bg-white rounded-lg overflow-hidden shadow-lg">
                                <img src={job.thumbnailURL} alt={job.title} className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h2>
                                    {renderDescription(job)}
                                    <div className="flex items-center mt-4">
                                        <span className="text-gray-500">Marks:</span>
                                        <span className="ml-2 text-blue-500 font-semibold">{job.marks}</span>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <span className="text-gray-500">Difficulty:</span>
                                        <span className="ml-2 text-blue-500 font-semibold">{job.difficultyLevel}</span>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <span className="text-gray-500">Due Date:</span>
                                        <span className="ml-2 text-blue-500 font-semibold">{job.dueDate}</span>
                                    </div>
                                </div>
                                {user && user.uid === job.uid ? (
                                    <div className="bg-gray-100 p-4 flex justify-end">
                                        <Link to={`/update/${job._id}`}>
                                            <button className="text-blue-500 hover:text-blue-700 font-semibold mr-2">Update</button>
                                        </Link>
                                        <button onClick={() => handleDelete(job._id)} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                                    </div>
                                ) : (
                                    <div className="bg-gray-100 p-4 flex justify-end">
                                        <Link to={`/assignment/${job._id}`}>
                                            <button className="text-blue-500 hover:text-blue-700 font-semibold">View Assignment</button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default AssignmentPage;
