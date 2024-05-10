import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const AssignmentPage = () => {
    const { user, loading } = useContext(AuthContext);
    const [difficultyFilter, setDifficultyFilter] = useState('All');
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const response = await axios.get('http://localhost:5000/assignment');
                setAssignments(response.data);
            } catch (error) {
                console.error('Error fetching assignments:', error);
            }
        };
        fetchAssignments();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/assignment/${id}`);
            if (response.status === 200) {
                setAssignments(assignments.filter(assignment => assignment._id !== id));
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

    const renderDescription = (assignment) => {
        const words = assignment.description.trim().split(/\s+/);
        const maxWordsToShow = 25;

        if (words.length <= maxWordsToShow) {
            return <p className="text-gray-600">{assignment.description}</p>;
        } else {
            const truncatedDescription = words.slice(0, maxWordsToShow).join(' ');
            return (
                <>
                    <p className="text-gray-600">{truncatedDescription}</p>
                    <Link to={`/assignment/${assignment._id}`} className="text-blue-500 hover:underline">Show More</Link>
                </>
            );
        }
    };

    const handleFilterChange = (e) => {
        setDifficultyFilter(e.target.value);
    };

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center my-20">Assignments</h2>
            <div className="flex mb-20 items-center justify-center mb-4">
                <label htmlFor="difficultyFilter" className="mr-2">Filter by Difficulty Level:</label>
                <select
                    id="difficultyFilter"
                    value={difficultyFilter}
                    onChange={handleFilterChange}
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                >
                    <option value="All">All</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {assignments
                    .filter(assignment => difficultyFilter === 'All' || assignment.difficultyLevel.toLowerCase() === difficultyFilter.toLowerCase())
                    .map(assignment => (
                        <div key={assignment._id} className="capitalize bg-white rounded-lg overflow-hidden shadow-lg">
                            <img src={assignment.thumbnailURL} alt={assignment.title} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{assignment.title}</h2>
                                {renderDescription(assignment)}
                                <div className="flex items-center mt-4">
                                    <span className="text-gray-500">Marks:</span>
                                    <span className="ml-2 text-blue-500 font-semibold">{assignment.marks}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className="text-gray-500">Difficulty:</span>
                                    <span className="ml-2 text-blue-500 font-semibold">{assignment.difficultyLevel}</span>
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className="text-gray-500">Due Date:</span>
                                    <span className="ml-2 text-blue-500 font-semibold">{assignment.dueDate}</span>
                                </div>
                                {user && user.uid === assignment.uid ? (
                                    <div className="bg-gray-100 p-4 flex justify-end">
                                        <Link to={`/update/${assignment._id}`}>
                                            <button className="text-blue-500 hover:text-blue-700 font-semibold mr-2">Update</button>
                                        </Link>
                                        <button onClick={() => handleDelete(assignment._id)} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                                    </div>
                                ) : (
                                    <div className="bg-gray-100 p-4 flex justify-end">
                                        <Link to={`/assignment/${assignment._id}`}>
                                            <button className="text-blue-500 hover:text-blue-700 font-semibold">View Assignment</button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default AssignmentPage;
