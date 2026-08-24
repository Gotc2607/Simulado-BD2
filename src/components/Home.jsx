import React from 'react';

const Home = ({ exams, onSelectExam }) => {
  return (
    <div className="glass-panel" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <h1 className="title">Simulados BD2</h1>
      
      <div className="exam-grid">
        {exams.map((exam) => (
          <div 
            key={exam.id} 
            className="glass-panel exam-card"
            onClick={() => onSelectExam(exam)}
          >
            <h2>{exam.title}</h2>
            <p>{exam.description}</p>
            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              <span className="btn" style={{ width: '100%' }}>
                Iniciar Simulado
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
