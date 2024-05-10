import React, { useEffect, useState } from 'react';
import AssignmentCard from './AssignmentCard';


const Assignment = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/assignment`)
            .then(res => res.json())
            .then(data => setDatas(data));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold   text-center my-20">Assignments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {datas.map(data => (
                    <AssignmentCard key={data._id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Assignment;
