import React from 'react';
import { fixedTimer } from '../../utils/get-displayed-time';

const Timer = ({ time, className, classItem }) => {

    return (
        <div className={`timer__container ${className}`}>
            {
                fixedTimer(time).split('').map((item, index) => (
                    <span key={index} className={`timer__item_item ${classItem}`}>{item}</span>
                ))
            }
        </div>
    );
};

export default Timer;
