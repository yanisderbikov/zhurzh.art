import React, { useLayoutEffect } from 'react';
import useIsMobile from '../../../hooks/useIsMobile.js';
import LandingDesktop from './desktop/LandingDesktop.jsx';
import LandingMobile from './mobile/LandingMobile.jsx';

export default function LandingPage() {
    const isMobile = useIsMobile();

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return isMobile ? <LandingMobile /> : <LandingDesktop />;
}
