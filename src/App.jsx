import React, { useState } from 'react';
import './index.css';
import { exams } from './data/exams';
import Home from './components/Home';
import Quiz from './components/Quiz';

function App() {
  const [currentExam, setCurrentExam] = useState(null);

  const startExam = (exam) => {
    setCurrentExam(exam);
  };

  const backToHome = () => {
    setCurrentExam(null);
  };

  return (
    <div className="container">
      {!currentExam ? (
        <Home exams={exams} onSelectExam={startExam} />
      ) : (
        <Quiz exam={currentExam} onBack={backToHome} />
      )}
    </div>
  );
}

export default App;
