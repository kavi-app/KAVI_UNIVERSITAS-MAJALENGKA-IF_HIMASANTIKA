import { useEffect, useState } from 'react';

// export type DeviceType = "mobile" | "tablet" | "desktop";

function getDevice(width) {
    if (width < 640) return 'mobile';

    if (width < 1024) return 'tablet';

    return 'desktop';
}

export function useDeviceType() {
    const [device, setDevice] = useState('desktop');

    useEffect(() => {
        const handleResize = () => {
            setDevice(getDevice(window.innerWidth));
        };

        handleResize(); // initial check
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const isMobile = device === 'mobile';
    const isTablet = device === 'tablet';
    const isDesktop = device === 'desktop';

    const isCompact = isMobile || isTablet;

    return { device, isMobile, isTablet, isDesktop, isCompact };
}