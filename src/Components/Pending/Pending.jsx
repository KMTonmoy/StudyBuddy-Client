




import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Pending = () => {
    const { user } = useContext(AuthContext);
    const [submissions, setSubmissions] = useState([]);
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/submited')
            .then(res => res.json())
            .then(data => setSubmissions(data))
            .catch(error => console.error('Error fetching submitted data:', error));

        fetch('http://localhost:5000/assignment')
            .then(res => res.json())
            .then(data => setAssignments(data))
            .catch(error => console.error('Error fetching assignments:', error));
    }, []);

    const isAssignmentSubmitted = () => {
        // Check if there are any submissions matching the user's uid
        return submissions.some(submission => submission.uid === user.uid);
    };

    return (
        <div>
            {user && isAssignmentSubmitted() ? (

                <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
                    {submissions.map(data => <div>
                        <div key={data._id} className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                            <p className="text-gray-600 mb-4">Marks: {data.mark}</p>
                            <p className="text-gray-600">Examinee: {data.examinee}</p>
                            <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Give Mark</button>
                        </div>
                    </div>)

                    }
                </div>



            ) : (
                <p>No Pendin Assignment Founded</p>
            )
            }
        </div >
    );
};

export default Pending;
