import { useContext,  useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import axios from 'axios'
import toast from 'react-hot-toast'

const CreateAssignment = () => {
    const { user } = useContext(AuthContext)

 
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [marks, setMarks] = useState('')
    const [thumbnailURL, setThumbnailURL] = useState('')
    const [difficultyLevel, setDifficultyLevel] = useState('easy')
    const [dueDate, setDueDate] = useState(new Date())

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/assignments', {
                title,
                description,
                marks,
                thumbnailURL,
                difficultyLevel,
                dueDate,
                createdBy: user.email,
            })
            if (response.status === 201) {
                toast.success('Assignment created successfully')
                history.push('/assignments')
            } else {
                toast.error('Failed to create assignment')
            }
        } catch (error) {
            console.error(error)
            toast.error('Failed to create assignment')
        }
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-4">Create New Assignment</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="marks" className="block text-sm font-medium text-gray-700">
                        Marks
                    </label>
                    <input
                        type="number"
                        id="marks"
                        value={marks}
                        onChange={(e) => setMarks(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="thumbnailURL" className="block text-sm font-medium text-gray-700">
                        Thumbnail URL
                    </label>
                    <input
                        type="url"
                        id="thumbnailURL"
                        value={thumbnailURL}
                        onChange={(e) => setThumbnailURL(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="difficultyLevel" className="block text-sm font-medium text-gray-700">
                        Difficulty Level
                    </label>
                    <select
                        id="difficultyLevel"
                        value={difficultyLevel}
                        onChange={(e) => setDifficultyLevel(e.target.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
                        Due Date
                    </label>
                    <input
                        type="date"
                        id="dueDate"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Create Assignment
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateAssignment
