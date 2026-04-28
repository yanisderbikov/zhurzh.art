import React from 'react';
import useIsMobile from '../../../hooks/useIsMobile.js';
import LandingDesktop from './desktop/LandingDesktop.jsx';
import LandingMobile from './mobile/LandingMobile.jsx';

export default function LandingPage() {
    const isMobile = useIsMobile();
    return isMobile ? <LandingMobile /> : <LandingDesktop />;
}
