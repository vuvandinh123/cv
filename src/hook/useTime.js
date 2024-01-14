import { useEffect, useState } from "react";

export function useTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const updateCurrentTime = () => {
            setCurrentTime(new Date());
        };
        const intervalId = setInterval(updateCurrentTime, 1000);
        return () => clearInterval(intervalId);
    }, [currentTime]);
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return {
        hours,
        minutes,
        seconds
    }
}
