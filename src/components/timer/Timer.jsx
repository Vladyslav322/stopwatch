import React from 'react';

const Timer = ({ timer }) => {
    return (
        <div className="timer__container">
            <span className="timer__item">
                {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
            </span>

            <span className="timer__item">
                {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}.
            </span>

            <span className="timer__item timer__item_milliseconds">
                {("0" + ((timer / 10) % 100)).slice(-2)}
            </span>
        </div>
    );
};

export default Timer;
