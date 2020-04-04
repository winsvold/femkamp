import { useState, useEffect } from 'react';

export default function useLongPress(callback: () => void, ms = 300) {
    const [startLongPress, setStartLongPress] = useState(false);

    useEffect(() => {
        if (startLongPress) {
            const timerId = setTimeout(callback, ms);
            return () => clearTimeout(timerId);
        }
    }, [startLongPress]);

    return {
        onMouseDown: () => setStartLongPress(true),
        onMouseUp: () => setStartLongPress(false),
        onMouseLeave: () => setStartLongPress(false),
        onTouchStart: () => setStartLongPress(true),
        onTouchEnd: () => setStartLongPress(false),
    };
}
