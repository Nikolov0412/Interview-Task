import { useTimer } from "../../Utils/timer";
import './Timer.css';
export const Timer = () => {
    const { pause, reset, running, seconds, start, stop } = useTimer();

    return (
        <div className="wrapper-container">
          <h1 className="secondsText">{seconds}</h1>
              <button onClick={running ? pause : start} className="startPauseBtn">Start / Pause</button>
                <button onClick={reset} className="resetBtn">Reset</button>
                <button onClick={stop} className="stopBtn">Stop</button>
        </div>
    );
};
