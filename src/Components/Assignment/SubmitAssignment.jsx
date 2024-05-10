import React from 'react';

const SubmitAssignment = () => {
    return (
            <div className="max-w-lg mx-auto mt-[100px]">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-blue-500 text-white py-4 px-6">
                        <h2 className="text-3xl font-bold">Submit Assignment</h2>
                    </div>
                    <div className="px-6 py-8">
                        <form className="space-y-4">
                            {/* PDF/DOC Link Input */}
                            <div>
                                <label htmlFor="pdfLink" className="block text-gray-700 text-sm font-semibold mb-2">PDF/DOC Link:</label>
                                <input
                                    type="text"
                                    id="pdfLink"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Enter PDF/DOC link"
                                    required
                                />
                            </div>

                            {/* Additional Notes */}
                            <div>
                                <label htmlFor="additionalNotes" className="block text-gray-700 text-sm font-semibold mb-2">Additional Notes:</label>
                                <textarea
                                    id="additionalNotes"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Add any additional notes or comments"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
      
    );
};

export default SubmitAssignment;
