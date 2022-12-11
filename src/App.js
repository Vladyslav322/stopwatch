import './App.scss';
import Timer from './components/timer/Timer';
import Button from './components/button/Button';
import ResultDisplay from './components/resultDisplay/ResultDisplay';
import { useEffect, useState } from 'react';

function App() {
    const [timer, setTimer] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const [pausedTimer, setPausedTimer] = useState(true);


    const handleStartTimer = () => {
        setStartTimer(true);
        setPausedTimer(false);
    };

    const handlePausedResumeTimer = () => {
        setPausedTimer(!pausedTimer);
    };

    const handleResetTimer = () => {
        setStartTimer(false);
        setTimer(0);
    };

    const handleNewCircleTimer = () => {

    };

    useEffect(() => {
        let interval;

        if (startTimer && pausedTimer === false) {
            interval = setInterval(() => {
                setTimer((timer) => timer + 10);
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
            <Timer
                timer={timer}
            />

            <Button
                startTimer={startTimer}
                pausedTimer={pausedTimer}
                handleStartTimer={handleStartTimer}
                handlePausedResumeTimer={handlePausedResumeTimer}
                handleResetTimer={handleResetTimer}
                handleNewCircleTimer={handleNewCircleTimer}
            />

            <ResultDisplay />
        </div>
    );
}

export default App;
