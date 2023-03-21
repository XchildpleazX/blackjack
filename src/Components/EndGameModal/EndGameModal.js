import React from 'react';
import './EndGameModal.css';

function EndGameModal({
    playerScore,
    dealerScore
}) {
    return (
        <div className="EndGameModal">
            You Scored: {playerScore}, and the dealer scored: {dealerScore}
        </div>
    );
}

export default EndGameModal;