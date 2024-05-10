import React from 'react';

const Feature = () => {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold   mb-4">Key Features</h2>
                    <p className="text-lg ">Discover the key features of our platform</p>
                </div>
                <div className="mt-10">
                    <div className="flex flex-wrap justify-center">
                        {/* Feature Card 1 */}
                        <div className="w-full md:w-[400px] h-auto py-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4">
                            <div className="px-4 py-2">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Create Assignments</h3>
                                <p className="text-gray-600">Easily create assignments for group study sessions.</p>
                            </div>
                        </div>
                        {/* Feature Card 2 */}
                        <div className="w-full md:w-[400px] h-auto py-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4">
                            <div className="px-4 py-2">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Filter Assignments</h3>
                                <p className="text-gray-600">Filter assignments based on difficulty level.</p>
                            </div>
                        </div>
                        {/* Feature Card 3 */}
                        <div className="w-full md:w-[400px] h-auto py-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4">
                            <div className="px-4 py-2">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Submit Assignments</h3>
                                <p className="text-gray-600">Submit assignments with PDF/doc links and notes.</p>
                            </div>
                        </div>
                        {/* Feature Card 4 */}
                        <div className="w-full md:w-[400px] h-auto py-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4">
                            <div className="px-4 py-2">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Theme Toggling</h3>
                                <p className="text-gray-600">Toggle between light and dark mode.</p>
                            </div>
                        </div>
                        {/* Feature Card 5 */}
                        <div className="w-full md:w-[400px] h-auto py-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4">
                            <div className="px-4 py-2">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">View My Assignments</h3>
                                <p className="text-gray-600">Access all your submitted assignments in one place.</p>
                            </div>
                        </div>
                        {/* Feature Card 6 */}
                        <div className="w-full md:w-[400px] h-auto py-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4">
                            <div className="px-4 py-2">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Grade Assignments</h3>
                                <p className="text-gray-600">Grade assignments submitted by your peers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
