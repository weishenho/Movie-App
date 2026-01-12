import { useContext } from 'react';

import { WatchListContext } from '@/context/WatchListContext';
const useWatchList = () => {
    const context = useContext(WatchListContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
};

export default useWatchList;