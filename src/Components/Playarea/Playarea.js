import React, {useState} from 'react';
import DealerStack from '../DealerStack/DealerStack';
import PlayerStack from '../PlayerStack/PlayerStack';
import GameInstructions from '../GameInstructions/GameInstructions';
import EndGameModal from '../EndGameModal/EndGameModal';
import './Playarea.css';

function Playarea() {
    const [readyPlay, setReadyPlay] = useState(false);
    const [playerStack, setPlayerStack] = useState([getRandomInt(9), getRandomInt(9)]);
    const [playerScore, setPlayerScore] = useState(playerStack[0] + playerStack[1]);
    const [dealerStack, setDealerStack] = useState([getRandomInt(9)]);
    const [dealerScore, setDealerScore] = useState(dealerStack[0]);
    const [endGame, setEndGame] = useState(false);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max + 1);
    }
    function drawCard() {
        const newCard = getRandomInt(9);
        setPlayerStack(playerStack.concat(newCard));
        setPlayerScore(playerScore + newCard);
    }
    function dealerPlay() {
            setTimeout(() => {
                const newCard = getRandomInt(9);
                setDealerStack(dealerStack.concat(newCard));
                setDealerScore(dealerScore + newCard);
            }, 1000);
            setTimeout(() => {
                setEndGame(true);
            }, 2000);
    }
    return (
        <div>
            {!endGame ? <GameInstructions /> : <EndGameModal playerScore={playerScore} dealerScore={dealerScore} />}
            <div className="Playarea">
                {readyPlay && (
                    <div className="Gameplay">
                        <div className="DealerGrid">
                            <DealerStack 
                                cardList={dealerStack}
                            />
                        </div>
                        <div className="Gameplay-Controls">
                            <div className="Score">Dealer Score: {dealerScore}</div>
                            <button onClick={() => drawCard()}>Hit</button>
                            <button onClick={() => dealerPlay()}>Stand</button>
                            <div className="Score">Player Score: {playerScore}</div>
                        </div>
                        <div className="PlayerGrid">
                            <PlayerStack
                                cardList={playerStack}
                            />
                        </div>
                    </div>
                )}
                {!readyPlay && (
                    <button className="Playarea-Start" onClick={() => setReadyPlay(true)}>Ready to play!</button>
                )}
            </div>
        </div>
      );
}

export default Playarea;