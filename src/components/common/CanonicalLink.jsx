import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_ORIGIN = 'https://zhurzh.art';

export default function CanonicalLink() {
    const { pathname } = useLocation();

    useEffect(() => {
        let link = document.querySelector('link[rel="canonical"]');
        if (!link) {
            link = document.createElement('link');
            link.rel = 'canonical';
            document.head.appendChild(link);
        }

        const normalized = pathname !== '/' && pathname.endsWith('/')
            ? pathname.slice(0, -1)
            : pathname;
        link.href = `${SITE_ORIGIN}${normalized || '/'}`;
    }, [pathname]);

    return null;
}
