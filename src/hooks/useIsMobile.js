import { useCallback, useEffect, useState } from 'react';

const QUERY = '(max-width: 700px)';

function getMatches() {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
        return false;
    }
    return window.matchMedia(QUERY).matches;
}

/**
 * true when viewport width is at most 700px (mobile layout).
 */
export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(getMatches);

    const sync = useCallback(() => {
        setIsMobile(getMatches());
    }, []);

    useEffect(() => {
        const mq = window.matchMedia(QUERY);
        sync();
        mq.addEventListener('change', sync);
        return () => mq.removeEventListener('change', sync);
    }, [sync]);

    return isMobile;
}
