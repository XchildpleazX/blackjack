import React from "react";
import Card from "../Card/Card";

function PlayerStack({
    cardList
}) {
    const suits = ["Hearts", "Spades", "Diamonds", "Clubs"];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <div>
            {cardList.map((game, index) => (
                <Card 
                    number={cardList[index]}
                    suit={suits[getRandomInt(3)]}
                />
            ))}
            
        </div>
    );
}

export default PlayerStack;