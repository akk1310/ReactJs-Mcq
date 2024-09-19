import React from 'react'

const Result = ({ score, total }) => {
    return (
        <div className='result bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center'>
            <h2 className='text-2xl font-semibold mb-4'>Quiz Completed</h2>
            <p className="text-lg mb-4">Your Score : {score}/{total}</p>


            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600" onClick={() => (window.location.reload())}>Try again</button>

        </div>
    )
}

export default Result
