import { useCallback, useState } from "react";
import { interval } from "./interval";

const useSecond = interval(1000);

export const useTimer = ({
    seconds: initialTimer = 0,
    running: initialRun = false
} = {}) => {
    const [seconds, updateSeconds] = useState(initialTimer);
    const [running, updateRunning] = useState(initialRun);
    const tick = useCallback(
        () => (running ? updateSeconds(seconds => seconds + 1) : undefined),
        [running]
    );
    const start = () => updateRunning(true);
    const pause = () => updateRunning(false);
    const reset = () => updateSeconds(0);
    const stop = () => {
        pause();
        reset();
    };

    useSecond(tick);

    return { pause, reset, running, seconds, start, stop };
};
