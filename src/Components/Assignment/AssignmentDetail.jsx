import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const AssignmentDetail = () => {

    const assignment = useLoaderData()


    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {assignment ? (
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 bg-blue-500 text-white py-2 px-4">Assignment Details</h2>

                    {/* Description */}
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Description:</h3>
                        <p className="text-gray-600">{assignment[0].description}</p>
                    </div>

                    {/* Marks */}
                    <div className="p-4 bg-gray-100">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Marks:</h3>
                        <p className="text-gray-600">{assignment[0].marks}</p>
                    </div>

                    {/* Difficulty Level */}
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Difficulty Level:</h3>
                        <p className="text-gray-600">{assignment[0].difficultyLevel}</p>
                    </div>

                    {/* Due Date */}
                    <div className="p-4 bg-gray-100">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Due Date:</h3>
                        <p className="text-gray-600">{assignment[0].dueDate}</p>
                    </div>

                    {/* Submission Form */}
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Submit Assignment:</h3>
                        {/* Insert assignment submission form here... */}
                    </div>
                </div>
            ) : (
                <p>Loading assignment details...</p>
            )}
        </div>
    );
};

export default AssignmentDetail;
