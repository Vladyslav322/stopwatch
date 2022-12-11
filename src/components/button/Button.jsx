import React from 'react';

const Button = (props) => {
    const startBtn = (
        <button
            className="button__item button__start"
            onClick={props.handleStartTimer}
        >
            Start
        </button>
    );

    const activeBtn = (
        <div className="button__container_group">
            {
                props.pausedTimer === false && props.startTimer === true ?
                <button
                    className="button__item"
                    onClick={props.handleNewCircleTimer}
                >
                    Circle
                </button>
                : <button
                        className="button__item button__reset"
                        onClick={props.handleResetTimer}
                    >
                        Reset
                </button>
            }

            <button
                className="button__item button__resume"
                onClick={props.handlePausedResumeTimer}
            >
                {props.pausedTimer ? "Resume" : "Pause"}
            </button>
        </div>
    );


    return (
        <div className="button__container">
            {props.active ? activeBtn : startBtn}
        </div>
    );
};

export default Button;
