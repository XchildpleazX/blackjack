import React from 'react';
import './Card.css';

function Card({
    number,
    suit
}) {
    return (
        <div className="Card">
            <div className="Card-Number">
                {number}
            </div>
            <div className={"Card-Suit Card-" + suit}>
                
            </div>
        </div>
    );
}

export default Card;