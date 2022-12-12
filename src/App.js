import './App.scss';
import Timer from './components/timer/Timer';
import Button from './components/button/Button';
import ResultDisplay from './components/resultDisplay/ResultDisplay';
import { useEffect, useState } from 'react';

function App() {
    const [time, setTime] = useState(0);
    const [temporary, setTemporary] = useState(0);
    const [result, setResult] = useState([]);
    const [startTimer, setStartTimer] = useState(false);
    const [pausedTimer, setPausedTimer] = useState(true);
    const [active, setActive] = useState(false);

    const handleStartTimer = () => {
        setActive(true);
        setStartTimer(true);
        setPausedTimer(false);
    };

    const handlePausedResumeTimer = () => {
        setPausedTimer(!pausedTimer);
    };

    const handleResetTimer = () => {
        setStartTimer(false);
        setActive(false);
        setTime(0);
        setResult([]);
        setTemporary(0);
    };

    const handleNewCircleTimer = () => {
        setResult([temporary, ...result]);
        setTemporary(0);
    };

    useEffect(() => {
        let interval;

        if (startTimer && pausedTimer === false) {
            interval = setInterval(() => {
                setTime((timer) => timer + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [startTimer, pausedTimer]);

    useEffect(() => {
        let interval;

        if (startTimer && pausedTimer === false) {
            interval = setInterval(() => {
                setTemporary((temporary) => temporary + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [startTimer, pausedTimer]);

    return (
        <div className="App">
            <Timer time={time}/>

            <Button
                active={active}
                startTimer={startTimer}
                pausedTimer={pausedTimer}
                handleStartTimer={handleStartTimer}
                handlePausedResumeTimer={handlePausedResumeTimer}
                handleResetTimer={handleResetTimer}
                handleNewCircleTimer={handleNewCircleTimer}
            />

            <ResultDisplay temporary={temporary} result={result}/>
        </div>
    );
}

export default App;
