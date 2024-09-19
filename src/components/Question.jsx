import React, { useState } from 'react'

const Question = ({ question, onResponse, onNext }) => {
    const { question: questionText, options, answer } = question
    

    const [selectedOption, setSelectedOption] = useState('')



    const handleClick = (option) => {
        setSelectedOption(option)
        if (option === answer) {
            onResponse(true)

        }
        else {
            onResponse(false)
        }
       
    }
    return (
        <div className='question bg-white p-6 rounded-lg max-w-md w-full text-center'>
            <h2 className='text-xl font-semibold mb-4'>{questionText}</h2>
            <div className='options flex flex-col'>
                {options.map((option, index) => (
                    <label key={index} className={`${option === selectedOption ? "bg-gray-200" : "bg-white"} mb-2 border-2 flex items-center text-xl gap-4 py-2 pl-2 rounded-md`}>

                        <input
                            type="checkbox"
                            value={option}
                            onChange={() => handleClick(option)}
                            checked={option === selectedOption}
                            className="hidden"
                        />
                        <span
                            className={`w-6 h-6 border-2  rounded-full flex items-center justify-center ${option === selectedOption ? 'bg-blue-500 border-blue-500' : 'border-gray-400'
                                }`}
                        >
                            {option === selectedOption && (
                                <span className="w-3 h-3 bg-white rounded-full"></span>
                            )}
                        </span>
                        {option}
                    </label>


                ))}
                
                    <div className='flex justify-end'>


                    <button  onClick={onNext} className='bg-green-500  w-1/3 text-white px-4 py-2 rounded-lg mb-2 hover:bg-green-600'>
                        Next
                    </button>
                    </div>
                

            </div>

        </div>
    )
}

export default Question
