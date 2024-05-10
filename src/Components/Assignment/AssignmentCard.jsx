import React from 'react';
import { Link } from 'react-router-dom';

const AssignmentCard = ({ data }) => {


    return (
        <div className="capitalize bg-white rounded-lg overflow-hidden shadow-lg">
            {/* Thumbnail */}
            <img src={data.thumbnailURL} alt={data.title} className="w-full h-64 object-cover" />

            <div className="p-6">
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h2>

                {/* Description */}
                <p className="text-gray-600">{data.description}</p>

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


            <div className="bg-gray-100 p-4 flex justify-end">
                {/* Update Button */}
                <Link to={`/update/${data._id}`}>
                    <button className="text-blue-500 hover:text-blue-700 font-semibold mr-2">Update</button>
                </Link>

                {/* Delete Button */}
                <button className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
            </div>

                // Normal View for other users
            <div className="bg-gray-100 p-4 flex justify-end">
                {/* View Assignment Button */}
                <Link to={`/assignemt/${data._id}`}>
                    <button className="text-blue-500 hover:text-blue-700 font-semibold">View Assignment</button>
                </Link>
            </div>

        </div>
    );
};

export default AssignmentCard;
