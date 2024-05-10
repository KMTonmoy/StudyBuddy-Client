import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const AssignmentPage = () => {
    const [datas, setDatas] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/assignment`)
            .then(res => res.json())
            .then(data => setDatas(data));
    }, []);

    const handleDelete = async (_id) => {
        try {
            const response = await fetch(`http://localhost:5000/assignment/${_id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete Assignment');
            }
            const data = await response.json();
            if (data.deletedCount > 0) {
                setDatas(datas.filter(assignment => assignment._id !== _id));
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

    const renderDescription = (data) => {
        const words = data.description.trim().split(/\s+/);
        const maxWordsToShow = 25;

        if (words.length <= maxWordsToShow) {
            return <p className="text-gray-600">{data.description}</p>;
        } else {
            const truncatedDescription = words.slice(0, maxWordsToShow).join(' ');
            return (
                <>
                    <p className="text-gray-600">{truncatedDescription}</p>
                    <Link to={`/assignemt/${data._id}`} className="text-blue-500 hover:underline">Show More</Link>
                </>
            );
        }
    };

    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-center my-20">Assignments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {datas.map(data => (
                        <div className="capitalize bg-white rounded-lg overflow-hidden shadow-lg" key={data._id}>
                            {/* Thumbnail */}
                            <img src={data.thumbnailURL} alt={data.title} className="w-full h-64 object-cover" />

                            <div className="p-6">
                                {/* Title */}
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h2>

                                {/* Description */}
                                {renderDescription(data)}

                                {/* Marks */}
                                <div className="flex items-center mt-4">
                                    <span className="text-gray-500">Marks:</span>
                                    <span className="ml-2 text-blue-500 font-semibold">{data.marks}</span>
                                </div>

                                {/* Difficulty Level */}
                                <div className="flex items-center mt-2">
                                    <span className="text-gray-500">Difficulty:</span>
                                    <span className="ml-2 text-blue-500 font-semibold">{data.difficultyLevel}</span>
                                </div>

                                {/* Due Date */}
                                <div className="flex items-center mt-2">
                                    <span className="text-gray-500">Due Date:</span>
                                    <span className="ml-2 text-blue-500 font-semibold">{data.dueDate}</span>
                                </div>
                            </div>

                            {/* Action Button (Update/Delete) */}
                            {user && user.uid === data.uid ? (
                                <div className="bg-gray-100 p-4 flex justify-end">
                                    {/* Update Button */}
                                    <Link to={`/update/${data._id}`}>
                                        <button className="text-blue-500 hover:text-blue-700 font-semibold mr-2">Update</button>
                                    </Link>

                                    {/* Delete Button */}
                                    <button onClick={() => handleDelete(data._id)} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                                </div>
                            ) : (
                                // Normal View for other users
                                <div className="bg-gray-100 p-4 flex justify-end">
                                    {/* View Assignment Button */}
                                    <Link to={`/assignment/${data._id}`}>
                                        <button className="text-blue-500 hover:text-blue-700 font-semibold">View Assignment</button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AssignmentPage;
