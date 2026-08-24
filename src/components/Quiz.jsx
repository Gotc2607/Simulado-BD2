import React, { useState } from 'react';

const Quiz = ({ exam, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = exam.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / exam.questions.length) * 100;

  const handleOptionClick = (optionIndex) => {
    if (isAnswered) return;
    
    setSelectedOption(optionIndex);
    setIsAnswered(true);

    if (optionIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="glass-panel results-container">
        <h2 className="title" style={{ marginBottom: '1rem' }}>Resultado: {exam.title}</h2>
        
        <div className="score-circle">
          <div className="score-number">{score}</div>
          <div className="score-label">de {exam.questions.length}</div>
        </div>

        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Você acertou {Math.round((score / exam.questions.length) * 100)}% das questões.
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-secondary" onClick={onBack}>
            Voltar ao Menu
          </button>
          <button className="btn" onClick={resetQuiz}>
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-panel" style={{ flex: 1 }}>
      <div className="quiz-header">
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exam.title}</h2>
          <span style={{ color: 'var(--text-muted)' }}>
            Questão {currentQuestionIndex + 1} de {exam.questions.length}
          </span>
        </div>
        <button className="btn btn-secondary" onClick={onBack} style={{ padding: '0.5rem 1rem' }}>
          Sair
        </button>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="question-text">
        {currentQuestion.text}
      </div>

      <div className="options-grid">
        {currentQuestion.options.map((option, index) => {
          let className = "option-btn";
          if (isAnswered) {
            if (index === currentQuestion.correctAnswer) {
              className += " correct";
            } else if (index === selectedOption) {
              className += " incorrect";
            }
          } else if (selectedOption === index) {
            className += " selected";
          }

          return (
            <button
              key={index}
              className={className}
              onClick={() => handleOptionClick(index)}
              disabled={isAnswered}
            >
              <span>{option}</span>
              {isAnswered && index === currentQuestion.correctAnswer && (
                <span style={{ color: 'var(--success)' }}>✓</span>
              )}
              {isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer && (
                <span style={{ color: 'var(--error)' }}>✕</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="quiz-footer">
        <button 
          className="btn" 
          onClick={handleNext}
          disabled={!isAnswered}
          style={{ opacity: !isAnswered ? 0.5 : 1 }}
        >
          {currentQuestionIndex === exam.questions.length - 1 ? 'Ver Resultado' : 'Próxima Questão'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
