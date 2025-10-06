import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const resetScroll = () => {
    const { pathname } = useLocation();

    //automatically scrolls to top of the page when the path changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}

export default resetScroll;