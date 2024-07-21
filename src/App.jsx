import React, { useState } from 'react';

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const questions = [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    }
  ];

  const handleAnswer = (option) => {
    if (option === questions[questionIndex].answer) {
      setScore(score + 1);
    }
    setAnswered(true);
  };

  const nextQuestion = () => {
    setAnswered(false);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert(`Quiz finished! Your score is ${score}/${questions.length}`);
      setQuestionIndex(0);
      setScore(0);
    }
  };
  return (
    <div className='quiz-container'>
      <h1>Quiz App</h1>
      <div className='question'>
        <h2>{questions[questionIndex].question}</h2>
        <div className='options'>
          {questions[questionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={answered}
              className={`option-button ${answered ? 'disabled' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
        {answered && <button onClick={nextQuestion}>Next Question</button>}
      </div>
      <div className='score'>
        <p>Score: {score}</p>
      </div>
    </div>
  );
};

export default Quiz;
