import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateScore } from '../Redux/action';

const Score = ({ score }) => {
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    setCurrentScore(score);
  }, [score]);

  return (
    <div>
      <div className='marks'>{currentScore}/10</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

const mapActionsToProps = {
  updateScore: updateScore,
};

export default connect(mapStateToProps, mapActionsToProps)(Score);
