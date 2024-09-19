// Develop a captivating ReactJS MCQ game app with one-question-per-screen navigation, user-friendly design, and a final score display upon completing the questions.
import { useState } from 'react'
import Question from './components/Question';
import Result from './components/Result';
const questions = [
  {
    question: "What of the following is used in React.js to increase performance?",
    options: ["Original DOM", "Virtual DOM", "Both A and B.", "None of the above."],
    answer: "Virtual DOM",
  },
  {
    question: "Which of the following acts as the input of a class-based component?",
    options: ["Class", "Factory", "Render", "Props"],
    answer: "Props",
  },
  {
    question: "Which of the following keyword is used to create a class inheritance?",
    options: ["Create", "Inherits", "Extends", "This"],
    answer: "Extends",
  },
  {
    question: "How many numbers of elements a valid react component can return?",
    options: ["2", "1", "5", "4"],
    answer: "1",
  },
  {
    question: "What is a state in React?",
    options: ["A permanent storage", "Internal storage of the component", "External storage of the component", "None of the above"],
    answer: "Internal storage of the component",
  },
  {
    question: "What are the two ways to handle data in React?",
    options: ["State & Props", "Services & Components", "State & Services", "State & Component"],
    answer: "State & Props",
  },
  {
    question: "Does React.js create a VIRTUAL DOM in the memory?",
    options: ["TRUE", "FALSE", "Can be true or false", "Cannot say"],
    answer: "TRUE",
  },
  {
    question: "What is the default value of the `useState` hook when no argument is passed?",
    options: ["null", "undefined", "false", "0"],
    answer: "undefined",
  }
];
function App() {
  const [currquestionindex, setCurrquestionindex] = useState(0)
  const [score, setScore] = useState(0)
  const [showresult, setShowresult] = useState(false)

  const handleResponse=(isCorrect)=>{
    if(isCorrect){
      setScore(score+1)
    }
  };
  const handleNext=()=>{

    const nextQuestionindex = currquestionindex+1
    if(nextQuestionindex < questions.length ){
      setCurrquestionindex(nextQuestionindex)
      
    }
    else{
      setShowresult(true)
    }
  }
 
  


  return (
    <>
     <div className='app min-h-screen flex flex-col justify-center items-center bg-gray-100'>
        <h1 className='text-red-500 text-4xl font-bold mb-8'>ReactJS MCQ GAME!</h1>
        {
          showresult ? ( 
            <Result score={score} total={questions.length} />
          ):(
            <Question question={questions[currquestionindex]} onResponse={handleResponse} onNext={handleNext} />
          )
        }
     </div>
    </>
  )
}

export default App
