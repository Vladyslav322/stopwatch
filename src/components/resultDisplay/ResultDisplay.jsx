import React, {useEffect, useState} from 'react';
import Timer from '../timer/Timer';
import {fixedTimer} from "../../utils/get-displayed-time";

const ResultDisplay = ({result, temporary}) => {
    const [minIndex, setMinIndex] = useState();
    const [maxIndex, setMaxIndex] = useState();

    useEffect(() => {
        if (result.length > 3) {
            const min = Math.min(...result);
            const minIndex = result.indexOf(min);
            setMinIndex(minIndex);

            const max = Math.max(...result);
            const maxIndex = result.indexOf(max);
            setMaxIndex(maxIndex);
        }
    }, [result]);

    return (
        <div className="result__container">
            <Timer time={temporary} className={`result__title_container`} classItem={`result__title`}/>

            {
                result.map((item, index) => (
                    <div
                        className={`result__item_container ${index === minIndex ? 'min' : ''} ${index === maxIndex ? 'max' : ''}`}
                        key={index}
                    >
                        <span>Kolo {result.length - index}</span>
                        <span>{fixedTimer(item)}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default ResultDisplay;
