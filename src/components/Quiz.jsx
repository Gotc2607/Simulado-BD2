import React, { useState } from 'react';

const Quiz = ({ exam, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [textAnswer, setTextAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = exam.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / exam.questions.length) * 100;
  
  const isMultiple = Array.isArray(currentQuestion.correctAnswer);
  const isText = currentQuestion.type === 'text' || typeof currentQuestion.correctAnswer === 'string';

  const handleOptionClick = (optionIndex) => {
    if (isAnswered) return;
    
    if (isMultiple) {
      if (selectedOptions.includes(optionIndex)) {
        setSelectedOptions(selectedOptions.filter(i => i !== optionIndex));
      } else {
        setSelectedOptions([...selectedOptions, optionIndex]);
      }
    } else {
      setSelectedOptions([optionIndex]);
      setIsAnswered(true);
      if (optionIndex === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleConfirm = () => {
    setIsAnswered(true);
    const correctAnswers = currentQuestion.correctAnswer;
    const isCorrect = selectedOptions.length === correctAnswers.length &&
                      selectedOptions.every(opt => correctAnswers.includes(opt));
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleConfirmText = () => {
    setIsAnswered(true);
    const isCorrect = textAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.trim().toLowerCase();
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < exam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptions([]);
      setTextAnswer("");
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setTextAnswer("");
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
        {isMultiple && <div style={{ fontSize: '0.9rem', color: 'var(--primary)', marginTop: '0.5rem' }}>(Selecione todas as opções corretas)</div>}
        {isText && <div style={{ fontSize: '0.9rem', color: 'var(--primary)', marginTop: '0.5rem' }}>(Digite exatamente a palavra ou expressão solicitada)</div>}
      </div>

      {isText ? (
        <div className="text-answer-container" style={{ margin: '2rem 0' }}>
          <input 
            type="text" 
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            disabled={isAnswered}
            placeholder="Digite sua resposta aqui..."
            style={{ width: '100%', padding: '1rem', fontSize: '1.2rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--text)' }}
          />
          {isAnswered && (
            <div style={{ marginTop: '1rem', fontSize: '1.1rem', color: textAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.trim().toLowerCase() ? 'var(--success)' : 'var(--error)' }}>
              {textAnswer.trim().toLowerCase() === currentQuestion.correctAnswer.trim().toLowerCase() 
                ? '✓ Resposta correta!' 
                : `✕ Incorreto. A resposta certa é: ${currentQuestion.correctAnswer}`}
            </div>
          )}
        </div>
      ) : (
        <div className="options-grid">
          {currentQuestion.options.map((option, index) => {
            let className = "option-btn";
            
            const isCorrectOption = isMultiple 
              ? currentQuestion.correctAnswer.includes(index)
              : currentQuestion.correctAnswer === index;

            const isSelected = selectedOptions.includes(index);

            if (isAnswered) {
              if (isCorrectOption) {
                className += " correct";
              } else if (isSelected) {
                className += " incorrect";
              }
            } else if (isSelected) {
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
                {isAnswered && isCorrectOption && (
                  <span style={{ color: 'var(--success)' }}>✓</span>
                )}
                {isAnswered && isSelected && !isCorrectOption && (
                  <span style={{ color: 'var(--error)' }}>✕</span>
                )}
              </button>
            );
          })}
        </div>
      )}

      <div className="quiz-footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
        {(isMultiple || isText) && !isAnswered && (
           <button className="btn btn-secondary" onClick={isText ? handleConfirmText : handleConfirm} disabled={isText ? textAnswer.trim().length === 0 : selectedOptions.length === 0}>
             Confirmar
           </button>
        )}
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
