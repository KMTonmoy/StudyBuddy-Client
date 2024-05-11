import React from 'react';

const Pending = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center my-8">Pending Assignments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Pending Assignment Cards */}
                {/* Replace this with actual data from your database */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">Assignment Title</h3>
                    <p className="text-gray-600 mb-4">Marks: 100</p>
                    <p className="text-gray-600">Examinee: John Doe</p>
                    <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Give Mark</button>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-2">Assignment Title</h3>
                    <p className="text-gray-600 mb-4">Marks: 100</p>
                    <p className="text-gray-600">Examinee: Jane Doe</p>
                    <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Give Mark</button>
                </div>
                {/* End of Pending Assignment Cards */}
            </div>
        </div>
    );
};

export default Pending;
