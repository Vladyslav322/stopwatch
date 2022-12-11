import './App.scss';
import Timer from './components/timer/Timer';
import Button from './components/button/Button';
import ResultDisplay from './components/resultDisplay/ResultDisplay';

function App() {
  return (
    <div className="App">
      <Timer />
      <Button />
      <ResultDisplay />
    </div>
  );
}

export default App;
